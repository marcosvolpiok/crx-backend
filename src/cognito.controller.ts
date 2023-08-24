import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';

import { CognitoService } from './cognito.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';

class User {
  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  password: string;
}

@Controller()
export class CognitoController {
  constructor(private readonly cognitoService: CognitoService) {}

  @ApiOkResponse({
    description: 'The User records',
    type: User,
  })
  @Post('api/user/')
  create(
    @Body()
    user: User,
  ): any {
    return this.cognitoService.create(user);
  }
}
