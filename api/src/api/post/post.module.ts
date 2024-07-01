import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostsController } from './posts.controller';
import { AccountModule } from '../account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './database/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'post', schema: PostSchema }]),
    AccountModule,
  ],
  controllers: [PostController, PostsController],
  providers: [PostService],
})
export class PostModule {}
