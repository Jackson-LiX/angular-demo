export interface TokenStore {
  getToken() : string | null;

  setToken(token: string): void;

  clearToken(): void;
}
