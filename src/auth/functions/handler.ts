import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI, { Request, Response } from 'lambda-api';
import { generateOAuthLink, getAccessToken } from './services/oauth';

const oauthApi = createAPI();

oauthApi.post('/oauth/token', async (req: OAuthTokenRequest, res: Response) => {
  const { accessToken, refreshToken } = await getAccessToken(req);
  if (accessToken && refreshToken) res.json({ accessToken, refreshToken });
  res.status(401);
});

oauthApi.post('/oauth/link', (req: Request, res: Response) =>
  res.json(generateOAuthLink(req))
);

export const handler = async (event: APIGatewayEvent, context: Context) =>
  await oauthApi.run(event, context);
