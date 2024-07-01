import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '../auth/auth.guard';

// @ApiBearerAuth('Access Token')
// @UseGuards(AuthGuard)
@Controller('post')
@ApiTags('Posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':post_id')
  async getPostById(@Param('post_id') post_id: string) {
    return await this.postService.findByPostID({ post_id });
  }
}
