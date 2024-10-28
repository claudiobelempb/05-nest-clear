import { Body, Controller, Post, UseGuards } from '@nestjs/common'

import { JwtAuthGuard } from 'src/shared/common/guards/jwt-auth.guard'
import { ZodValidationPipe } from 'src/shared/common/pipes/zod-validation-pipe'
import { UserPayload } from 'src/shared/common/providers/jwt.strategy'
import { z } from 'zod'
import { CurrentUserDecoratior } from '../../../http/auth/current-user.decorator'
import { QuestionCreateService } from '../services/question-create.service'

export const CreateQuestionSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export type CreateQuestion = z.infer<typeof CreateQuestionSchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private readonly service: QuestionCreateService) {}

  @Post()
  async handle(
    @Body(new ZodValidationPipe(CreateQuestionSchema)) request: CreateQuestion,
    @CurrentUserDecoratior() user: UserPayload
  ): Promise<CreateQuestion> {
    return this.service.execute(user.sub, request)
  }
}
