import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module';
import { QuestionModule } from '../question/question.module';
import { UsersModule } from '../user/users.module';
import { envSchema } from './env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),

    AuthModule,
    UsersModule,
    QuestionModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
