import { Slide, Status } from '@/common/typedef.irisations';
import mongoose, { Document, ObjectId, Schema } from 'mongoose';

// Définition des types
export type ICarousel =  Document & Slide & {
  _id: ObjectId;
}

// Définir le schéma
const carouselSchema: Schema = new Schema({
  id: { type: String },
  pageId: { type: Number },
  title: { type: String },
  src: { type: String },
  position: { type: Number },
  label: { type:  [String] },
  slideOrder: { type: Number },
  status: { type: Number },
  alt: { type: [String] },
  date: {
    create: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now }
  }
});

// Middleware pour ajouter l'id
carouselSchema.pre<ICarousel>('save', function (next) {
  if (this.isNew) {
    this.id = this._id.toString();
    this.status = Status.VALIDE
    this.date.create = new Date();
  }
  this.date.update = new Date();
  next();
});

// Exporter le modèle
const carouselModel =
  mongoose.models.carousel ||
  mongoose.model<ICarousel>('carousel', carouselSchema);

export default carouselModel;
