import {TokenStore} from "./token.store";
import {CommonConstants} from "../common/common.constants";
import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LocalStorageTokenStoreService implements TokenStore {

  clearToken(): void {
    localStorage.removeItem(CommonConstants.TOKEN_STORAGE_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(CommonConstants.TOKEN_STORAGE_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(CommonConstants.TOKEN_STORAGE_KEY, token);
  }

}
