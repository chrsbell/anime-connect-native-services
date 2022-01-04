import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI, { Request, Response } from 'lambda-api';

const userApi = createAPI();

userApi.get('/user', (req: Request, res: Response) => res.send('hi'));

export const handler = async (event: APIGatewayEvent, context: Context) =>
  await userApi.run(event, context);
