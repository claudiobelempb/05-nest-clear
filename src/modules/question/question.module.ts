import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionController } from './controllers/question-create.controller';

@Module({
  imports: [],
  controllers: [CreateQuestionController],
  providers: [PrismaService],
})
export class QuestionModule {}
