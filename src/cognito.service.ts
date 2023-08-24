//import { Prisma, Result } from '@prisma/client';

import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { curry, defaultTo } from 'ramda';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CognitoService {
  constructor() {}

  DEFAULT_REGION = 'us-east-2';

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

  async create({ password, email }) {
    const result = await this.signUp({
      clientId: '2akia7kk2d3a2gb15l8ce4s50h',
      username: email,
      password: password,
      email: email,
    });

    return result;
  }
}
