//import { Prisma, Result } from '@prisma/client';

import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { curry, defaultTo } from 'ramda';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CognitoService {
  constructor() {}

  DEFAULT_REGION = 'us-east-2';
  CLIENT_ID = '2akia7kk2d3a2gb15l8ce4s50h';

  orDefaultRegion = defaultTo(this.DEFAULT_REGION);

  createClientForRegion = curry(
    (region, ClientConstructor) =>
      new ClientConstructor({ region: this.orDefaultRegion(region) }),
  );

  createClientForDefaultRegion = this.createClientForRegion(null);

  signUp = ({ clientId, username, password, email }) => {
    const client = this.createClientForDefaultRegion(
      CognitoIdentityProviderClient,
    );

    const command = new SignUpCommand({
      ClientId: clientId,
      Username: username,
      Password: password,
      UserAttributes: [{ Name: 'email', Value: email }],
    });

    return client.send(command);
  };

  initiateAuth = async ({ email, password }) => {
    const client = this.createClientForDefaultRegion(
      CognitoIdentityProviderClient,
    );

    const command = new InitiateAuthCommand({
      AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
      ClientId: this.CLIENT_ID,
    });

    const result = await client.send(command);
    return result;
  };

  async create({ password, email }) {
    const result = await this.signUp({
      clientId: this.CLIENT_ID,
      username: email,
      password: password,
      email: email,
    });

    return result;
  }
}
