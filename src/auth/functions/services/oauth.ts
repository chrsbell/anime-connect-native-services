import axios from 'axios';
import crypto from 'crypto';
import { Nullable } from 'Object/_api';
import pkceChallenge from 'pkce-challenge';
import qs from 'qs';
import { clientId, clientSecret } from '../../config';

export const generateOAuthLink = (
  req: OAuthRedirectRequest
): OAuthRedirectResponse => {
  const codeChallenge = pkceChallenge(128).code_challenge;
  const state = crypto.randomBytes(20).toString('hex');
  return {
    codeVerifier: codeChallenge,
    oaState: state,
    redirectURL: `https://myanimelist.net/v1/oauth2/authorize?${qs.stringify({
      response_type: 'code',
      client_id: clientId,
      state,
      code_challenge: codeChallenge,
      code_challenge_method: 'plain',
      redirect_uri: req.body.appLink,
    })}`,
  };
};

export const getAccessToken = async (
  req: OAuthTokenRequest
): Promise<Nullable<{ accessToken: string; refreshToken: string }>> => {
  try {
    const { data } = await axios({
      url: 'https://myanimelist.net/v1/oauth2/token',
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      data: qs.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code: req.body.code,
        redirect_uri: req.body.redirectURL,
        code_verifier: req.body.codeVerifier,
      }),
    });
    return {
      accessToken: data?.access_token,
      refreshToken: data?.refresh_token,
    };
  } catch (err) {
    console.log(`Couldn't get initial tokens from MAL.`);
  }
  return { accessToken: null, refreshToken: null };
};
