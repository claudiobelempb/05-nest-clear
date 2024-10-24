import { Controller, Get, Query } from '@nestjs/common'
import { ZodValidationPipe } from 'src/shared/common/pipes/zod-validation-pipe'
import { z } from 'zod'
import { QuestionFindAllService } from '../services/question-findall.service'

const pageQueryParamSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamSchema)

type pageQueryParam = z.infer<typeof pageQueryParamSchema>

@Controller('questions')
export class QuestionFindAllController {
  constructor(private readonly service: QuestionFindAllService) {}

  @Get()
  async handle(@Query('page', queryValidationPipe) page: pageQueryParam) {
    return await this.service.execute(page)
  }
}
