import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateQuestionController } from './controllers/question-create.controller'
import { QuestionFindAllController } from './controllers/question-findall.controller'
import { QuestionCreateService } from './services/question-create.service'
import { QuestionFindAllService } from './services/question-findall.service'

@Module({
  imports: [],
  controllers: [CreateQuestionController, QuestionFindAllController],
  providers: [PrismaService, QuestionCreateService, QuestionFindAllService],
})
export class QuestionModule {}
