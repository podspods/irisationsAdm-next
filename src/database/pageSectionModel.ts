import { PageSection, Status } from '@/common/typedef.irisations';
import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export type IPageSection = Document & PageSection & {
    _id: ObjectId;
  };

const pageSectionSchema: Schema = new Schema({
  ident: {
    id: { type: String },
    pageType: { type: Number },
    status: { type: Number },
    title: { type: [String] },
    titleLink: { type: [String] },
    pageId: { type: Number },
    sectionOrder: { type: Number },
    type: { type: Number },

    dateRange: {
      startDate: { type: Date },
      endDate: { type: Date }
    }
  },
  text: { type: [String], required: false },
  textCTA: { type: [String], required: false },
  image: {
    src: { type: String },
    alt: { type: [String] },
    width: { type: Number },
    height: { type: Number },
    position: { type: Number }
  },
  date: {
    create: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now }
  }
});

// Middleware for copying l'id
pageSectionSchema.pre<IPageSection>('save', function (next) {
  if (this.isNew) {
    this.ident.id = this._id.toString();
    this.ident.status = Status.VALIDE
    this.date.update = new Date();
  }
  next();
});

// model to export 
const pageSectionModel =
  mongoose.models.pageSection ||
  mongoose.model<IPageSection>('pageSection', pageSectionSchema);

export default pageSectionModel;
