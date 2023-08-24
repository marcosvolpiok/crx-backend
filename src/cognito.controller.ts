import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';

import { CognitoService } from './cognito.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';

class User {
  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  password: string;
}

class UserResponse {
  @ApiProperty({ type: String })
  UserSub: string;
}

@Controller()
export class CognitoController {
  constructor(private readonly cognitoService: CognitoService) {}

  @ApiOkResponse({
    description: 'The User records',
    type: UserResponse,
  })
  @Post('api/user/')
  async create(
    @Body()
    user: User,
  ): Promise<any> {
    const result = await this.cognitoService.create(user);
    console.log('resuiltttt', result);
    return { UserSub: result.UserSub };
  }
}
