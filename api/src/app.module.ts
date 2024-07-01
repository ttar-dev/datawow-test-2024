import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountService } from './api/account/account.service';
import { AccountModule } from './api/account/account.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [AccountModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AccountService],
})
export class AppModule {}
