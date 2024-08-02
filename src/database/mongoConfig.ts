import mongoose from 'mongoose';

let isConnected: number = 0;

export async function connect() {
  if (isConnected > 0) {
    console.log('Reusing existing MongoDB connection:', isConnected);
    return ;
  }

  if (!process.env.MONGO_URL)
    throw new Error('Please set your MONGO_URL environment variable');

  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGO_URL!);
      const connection = mongoose.connection;
      connection.on('connected', () => {
        isConnected += 1;
        console.log(
          '----------------- MongoDb connected successfully ------------------',
          isConnected
        );
      });

      connection.on('error', (err: any) => {
        console.error('MongoDB connection error:', err);
        isConnected = 0;
      });

      connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
        isConnected = 0;
      });
    } catch (error) {
      console.error(
        'x-x-x-x-x-x-error connect x-x-x-x-x-x-x-x-x-x-x-x-x-',
        error
      );
      isConnected = 0;
    }
  }
}
