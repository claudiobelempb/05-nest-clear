import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZodValidationPipe } from 'src/shared/common/pipes/zod-validation-pipe';
import { z } from 'zod';

export const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type authenticateBodySchema = z.infer<typeof authenticateBodySchema>;

@Controller('/sessions')
export class AuthenticateController {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(authenticateBodySchema))
  async handle(@Body() request: authenticateBodySchema) {
    const { email, password } = request;

    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('User credentials do not match...');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials do not match...');
    }

    const accessToken = await this.jwt.signAsync({
      sub: user.id,
    });

    return {
      access_token: accessToken,
    };
  }
}
