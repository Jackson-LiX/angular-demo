export interface JwtToken {
  access_token: string,
  token_type: string,
  expires_in: number,
  scope: string,
  info: any
}
