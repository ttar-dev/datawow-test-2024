import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { configService } from 'src/config/env.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<any> {
    if (!username || !password) {
      throw new UnauthorizedException();
    }

    const user = {
      sub: 'user.uid',
      name: 'user.name',
      image: 'user.image',
      email: 'user.email',
    };

    const payload = {
      ...user,
      access_token: await this.jwtService.signAsync(
        {
          sub: 'user.uid',
          name: 'user.name',
          image: 'user.image',
          email: 'user.email',
        },
        {
          expiresIn: '24h',
          issuer: `::${configService.getPort()}`,
        },
      ),
      expires_at: Date.now() + 24 * 60 * 60 * 1000,
      token_type: 'Bearer',
    };
    return payload;
  }
}
