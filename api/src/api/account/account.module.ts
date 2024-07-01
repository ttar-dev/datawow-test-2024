import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './database/account.schema';
import { AccountService } from './account.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'account', schema: AccountSchema }]),
  ],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
