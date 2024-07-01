import { Injectable } from '@nestjs/common';
import { PostModelType } from './database/post.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('post')
    private readonly mgPost: Model<PostModelType>,
  ) {}

  async findAll(query: { author_id?: string }) {
    return this.mgPost.find(query).lean();
  }
  async findByPostID(query: { post_id?: string; author_id?: string }) {
    return this.mgPost.findOne(query).lean();
  }
}
