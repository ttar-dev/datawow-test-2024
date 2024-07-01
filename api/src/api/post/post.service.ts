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
    return await this.mgPost.find(query).lean();
  }

  async findByPostID(query: { post_id?: string; author_id?: string }) {
    return await this.mgPost
      .findOne(query, {
        _id: 0,
        __v: 0,
      })
      .lean();
  }

  async updateByPostID(query: {
    post_id?: string;
    author_id?: string;
    updateValues?: { title?: string; content?: string; community?: string };
  }) {
    return await this.mgPost
      .findOneAndUpdate(
        {
          post_id: query.post_id,
          author_id: query.author_id,
        },
        {
          $set: query.updateValues,
        },
      )
      .lean();
  }

  async create(createValues: {
    title: string;
    content: string;
    community: string;
    author_id: string;
  }) {
    return await this.mgPost.create(createValues);
  }
}
