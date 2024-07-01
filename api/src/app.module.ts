import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './api/account/account.module';
import { AuthModule } from './api/auth/auth.module';
import { configService } from './config/env.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { InitialModule } from './api/initial/initial.module';
import { PostModule } from './api/post/post.module';

@Module({
  imports: [
    MongooseModule.forRoot(configService.getMongodbConnectString()),
    JwtModule.register({
      global: true,
      secret: configService.getJwtSecret(),
      signOptions: { expiresIn: '24h' },
    }),
    AccountModule,
    AuthModule,
    InitialModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
