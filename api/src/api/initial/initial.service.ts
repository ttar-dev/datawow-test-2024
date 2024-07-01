import { Injectable } from '@nestjs/common';
import { AccountService } from '../account/account.service';

@Injectable()
export class InitialService {
  constructor(private accountService: AccountService) {}

  async onModuleInit() {
    const user = await this.accountService.findOneBy({ username: 'admin' });
    if (user) {
      return;
    }
    return this.accountService.createAccount({
      username: 'admin',
      password: 'P@ssw0rd',
      name: 'John Doe',
      email: 'admin@example.com',
    });
  }
}
