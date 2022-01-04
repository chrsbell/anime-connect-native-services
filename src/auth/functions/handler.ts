import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI, { Request, Response } from 'lambda-api';

const oauthApi = createAPI();

oauthApi.get('/oauth/token', (req: Request, res: Response) => res.send('bye'));
oauthApi.get('/oauth/redirect', (req: Request, res: Response) =>
  res.send('bye')
);

export const handler = async (event: APIGatewayEvent, context: Context) =>
  await oauthApi.run(event, context);
