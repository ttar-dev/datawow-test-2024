import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountModelType } from './database/account.schema';
// import * as bcrypt from 'bcrypt';
@Injectable()
export class AccountService {
  constructor(
    @InjectModel('account')
    private readonly mgUser: Model<AccountModelType>,
  ) {}

  async findOneBy(values: { uid?: string; username?: string }) {
    return await this.mgUser
      .findOne(values, {
        _id: 0,
        __v: 0,
        password: 0,
      })
      .lean();
  }

  async createAccount(values: {
    username: string;
    password: string;
    name: string;
    email: string;
  }) {
    // const hashedPassword = await bcrypt.hash(values.password, 10);
    return await this.mgUser.create({ ...values, password: '-' });
  }
}
