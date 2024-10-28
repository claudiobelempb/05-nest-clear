import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Module } from '@nestjs/common'
import { CommonModule } from 'src/shared/common/modules/common.module'
import { JwtStrategy } from 'src/shared/common/providers/jwt.strategy'
import { LocalStrategy } from 'src/shared/common/providers/local.strategy'
import { UsersModule } from '../user/users.module'
import { AuthenticateController } from './controllers/authenticate.controller'

@Module({
  imports: [CommonModule, UsersModule],
  controllers: [AuthenticateController],
  providers: [PrismaService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
