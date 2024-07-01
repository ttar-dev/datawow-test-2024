import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import {
  CreatePostRequestBody,
  PostResponseData,
  UpdatePostRequestBody,
} from './dtos/post.dto';

@Controller('post')
@ApiTags('Posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':post_id')
  async getPostById(
    @Param('post_id') post_id: string,
  ): Promise<PostResponseData> {
    return await this.postService.findByPostID({ post_id });
  }

  @ApiBearerAuth('Access Token')
  @UseGuards(AuthGuard)
  @Put(':post_id')
  async updatePostById(
    @Req() { user }: { user: any },
    @Param('post_id') post_id: string,
    @Body()
    { title, content, community }: UpdatePostRequestBody,
  ) {
    return await this.postService.updateByPostID({
      post_id,
      author_id: user.uid,
      updateValues: { title, content, community },
    });
  }

  @ApiBearerAuth('Access Token')
  @UseGuards(AuthGuard)
  @Post()
  async createPost(
    @Req() { user }: { user: any },
    @Body()
    { title, content, community }: CreatePostRequestBody,
  ) {
    return await this.postService.create({
      title,
      content,
      community,
      author_id: user.uid,
    });
  }

  @ApiBearerAuth('Access Token')
  @UseGuards(AuthGuard)
  @Delete(':post_id')
  async deletePost(
    @Req() { user }: { user: any },
    @Param('post_id') post_id: string,
  ) {
    return await this.postService.deleteByPostID({
      post_id,
      author_id: user.uid,
    });
  }
}
