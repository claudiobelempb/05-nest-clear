import { Controller, Get, UseGuards } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { LocalAuthGuard } from 'src/shared/common/guards/local-auth.guard';

@Controller('/questions')
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @UseGuards(LocalAuthGuard)
  async handle() {
    return 'ok';
  }
}
