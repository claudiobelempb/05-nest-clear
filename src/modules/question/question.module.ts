import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateQuestionController } from './controllers/question-create.controller'
import { QuestionCreateService } from './services/question-create.service'

@Module({
  imports: [],
  controllers: [CreateQuestionController],
  providers: [PrismaService, QuestionCreateService],
})
export class QuestionModule {}
