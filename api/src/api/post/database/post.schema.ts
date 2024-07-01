import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

export type PostModelType = mongoose.HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true, default: () => nanoid() })
  post_id: string;

  @Prop({ required: true, ref: 'account' })
  author_id: string;

  @Prop()
  community: string;

  @Prop({ max: 120 })
  title: string;

  @Prop({ default: '' })
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
