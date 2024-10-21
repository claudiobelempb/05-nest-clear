import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountController } from './controllers/create-account.controller';

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [PrismaService],
  exports: [],
})
export class UsersModule {}
