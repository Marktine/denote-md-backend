import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

/**
 * Document of a user
 * @export
 * @interface DocumentUser
 * @extends {Document}
 */
export interface IDocumentUser extends Document {
  uuid: string;
  alias: String;
  status: String;
  userId: String;
  created: Date;
  active: Boolean;
  email: String;
  profileId: Schema.Types.ObjectId;
}

export const SchemaUser = new Schema({
  uuid: { type: String, default: uuidv4(), unique: true, index: true },
  alias: { type: String, unique: true, index: true },
  status: String,
  vote: { type: Number, default: 100 },
  userId: { type: String, unique: true, index: true },
  created: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  achievement: [String],
  email: { type: String, unique: true, index: true },
  profileId: { type: Schema.Types.ObjectId, ref: 'Profile' },
});

export const ModelUser = mongoose.model<IDocumentUser>('User', SchemaUser);
