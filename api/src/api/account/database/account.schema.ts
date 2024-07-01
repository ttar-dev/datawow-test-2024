import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

export type AccountModelType = mongoose.HydratedDocument<Account>;

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true, default: () => nanoid() })
  uid: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ max: 64 })
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ default: 'https://i.pravatar.cc/300' })
  image: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
