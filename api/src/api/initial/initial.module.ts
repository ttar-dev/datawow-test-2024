import { Module } from '@nestjs/common';
import { InitialService } from './initial.service';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [AccountModule],
  providers: [InitialService],
  exports: [InitialService],
})
export class InitialModule {}
