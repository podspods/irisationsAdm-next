import { connect } from '@/database/mongoConfig';
import scoopModel from '@/database/scoop.model';
import { NextResponse } from 'next/server';

type GETProps = {
  params: {
    id: string;
  };
};

export async function GET() {

  try {
    connect();
    const scoopList = await scoopModel
      .find()

    return NextResponse.json({ scoopList });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
