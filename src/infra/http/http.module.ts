import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { AuthModule } from './auth/auth.module'
import { QuestionModule } from './question/question.module'
import { UsersModule } from './user/users.module'

@Module({
  imports: [AuthModule, UsersModule, QuestionModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
