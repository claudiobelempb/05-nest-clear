import { Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUserDecoratior } from 'src/modules/auth/current-user.decorator'

import { PrismaService } from 'src/prisma/prisma.service'
import { JwtAuthGuard } from 'src/shared/common/guards/jwt-auth.guard'
import { TokenPayload } from 'src/shared/common/providers/jwt.strategy'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(@CurrentUserDecoratior() user: TokenPayload) {
    console.log(user)
    return 'ok'
  }
}
