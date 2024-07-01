import { ApiProperty } from '@nestjs/swagger';

export class SignInRequestBody {
  @ApiProperty({ required: true, example: 'admin' })
  username: string;

  // @ApiProperty({ required: true, example: 'P@ssw0rd1234' })
  // password: string;
}
