import { CognitoController } from './cognito.controller';
import { CognitoService } from './cognito.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [CognitoController],
  providers: [CognitoService],
})
export class AppModule {}
