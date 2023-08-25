import { Controller, Get, Delete, Param, Body, Post } from '@nestjs/common';

import { CognitoService } from './cognito.service';
import {
  ApiOkResponse,
  ApiCreatedResponse,
  ApiProperty,
} from '@nestjs/swagger';

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

class UserAuthResponse {
  @ApiProperty({ type: String })
  UserSub: string;

  @ApiProperty({ type: String })
  AccessToken: string;

  @ApiProperty({ type: String })
  ExpiresIn: string;

  @ApiProperty({ type: String })
  IdToken: string;

  @ApiProperty({ type: String })
  RefreshToken: string;

  @ApiProperty({ type: String })
  TokenType: string;
}
@Controller()
export class CognitoController {
  constructor(private readonly cognitoService: CognitoService) {}

  @ApiCreatedResponse({
    description: 'The User records',
    type: UserResponse,
  })
  @Post('api/user/')
  async create(
    @Body()
    user: User,
  ): Promise<any> {
    const result = await this.cognitoService.create(user);
    return { UserSub: result.UserSub };
  }

  @ApiOkResponse({
    description: 'The User records',
    type: UserAuthResponse,
  })
  @Post('api/user/auth/')
  async auth(
    @Body()
    user: User,
  ): Promise<any> {
    const result = await this.cognitoService.initiateAuth(user);
    return {
      AccessToken: result.AuthenticationResult.AccessToken,
      ExpiresIn: result.AuthenticationResult.ExpiresIn,
      IdToken: result.AuthenticationResult.IdToken,
      RefreshToken: result.AuthenticationResult.RefreshToken,
      TokenType: result.AuthenticationResult.TokenType,
    };
  }
}
