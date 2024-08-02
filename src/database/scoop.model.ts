import { Scoop } from '@/common/typedef';
import { Status } from '@/common/typedef.irisations';
import mongoose, { Document, ObjectId, Schema } from 'mongoose';

// Définition des types
export type  IScoop =  Document & Scoop & {
  _id: ObjectId;
}

// Définir le schéma
const scoopSchema: Schema = new Schema({
  id: { type: String },
  message: { type: [String] },
  pageId: { type: Number },
  level: { type: Number },
  dateRange: {
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now }
  },
  status: { type: Number },
  date: {
    create: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now }
  }
});

// Middleware pour ajouter l'id
scoopSchema.pre<IScoop>('save', function (next) {
  if (this.isNew) {
    this.id = this._id.toString();
    this.status = Status.VALIDE,
    this.date.update = new Date();
  }
  next();
});

// Exporter le modèle
const scoopModel =
  mongoose.models.scoop ||
  mongoose.model<IScoop>('scoop', scoopSchema);

export default scoopModel;
