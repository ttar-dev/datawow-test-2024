import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInRequestBody } from './dtos/auth.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signIn(@Body() signInDto: SignInRequestBody) {
    return this.authService.signIn(signInDto);
  }
}
