import { ApiProperty } from '@nestjs/swagger';

export class CreatePostRequestBody {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  content: string;

  @ApiProperty({ required: true })
  community: string;
}

export class UpdatePostRequestBody {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  community: string;
}

export class PostResponseData {
  @ApiProperty()
  post_id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  community: string;

  @ApiProperty()
  author_id: string;

  // @ApiProperty()
  // createdAt: string | Date;

  // @ApiProperty()
  // updatedAt: string | Date;
}
