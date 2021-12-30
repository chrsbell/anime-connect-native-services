import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI, { Request, Response } from 'lambda-api';

const app = createAPI();

app.get('/oauth/token', (req: Request, res: Response) => res.send('hi'));

export const handler = async (event: APIGatewayEvent, context: Context) =>
  await app.run(event, context);
