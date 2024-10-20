import { Module } from '@nestjs/common';
import { CommonModule } from 'src/shared/common/common.module';

@Module({
  imports: [CommonModule],
})
export class AuthModule {}
