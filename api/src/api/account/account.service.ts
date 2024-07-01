import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountModelType } from './database/account.schema';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel('account')
    private readonly mgUser: Model<AccountModelType>,
  ) {}

  async findOneBy(params: { uid: string }) {
    return await this.mgUser.findOne(params, {
      _id: 0,
      __v: 0,
      password: 0,
    });
  }
}
