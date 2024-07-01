import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async signIn({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<any> {
    return { username, password };
  }
}
