import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common';
import { hash } from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZodValidationPipe } from 'src/shared/common/pipes/zod-validation-pipe';
import { z } from 'zod';

export const createAccountRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type createAccountRequestSchema = z.infer<typeof createAccountRequestSchema>;

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountRequestSchema))
  async handle(@Body() request: createAccountRequestSchema) {
    const { name, email, password } = request;
    const hashedPassword = await hash(password, 8);

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException('User with same e-mail already exists.');
    }

    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}
