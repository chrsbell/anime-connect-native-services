declare interface OAuthRedirectResponse {
  codeVerifier: string;
  oaState: string;
  redirectURL: string;
}

declare interface OAuthRedirectRequest {
  appLink: string;
}

declare interface OAuthTokenRequest {
  body: {
    code: string;
    codeVerifier: string;
    redirectURL: string;
  };
}

declare interface OAuthTokenResponse {
  refreshToken: string;
}
