import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts() {
    return await this.postService.findAll({});
  }

  @Get(':author_id')
  async getPostByAuthor(@Param('author_id') author_id: string) {
    return await this.postService.findAll({ author_id });
  }
}
