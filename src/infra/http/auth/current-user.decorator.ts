import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserPayload } from 'src/shared/common/providers/jwt.strategy'

export const CurrentUserDecoratior = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    return request.user as UserPayload
  }
)
