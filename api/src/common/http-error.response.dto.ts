import { ApiProperty } from '@nestjs/swagger';

export class HttpErrorResponse {
  @ApiProperty()
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
