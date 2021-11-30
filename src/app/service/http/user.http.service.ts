import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {User} from "../../common/interface/user";
import {JwtToken} from "../../auth/interface/jwt.token";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private readonly _httpClient: HttpClient) { }

  getOauthToken(userName: string, password: string) {
    return this._httpClient.post<JwtToken>('/oauth/token', null, {
      params: {
        client_id: 'demo_user',
        scope: 'trust',
        grant_type: 'password',
        username: userName,
        password: password
      }
    })
  }

  getAllUser() {
    return this._httpClient.get<Array<User>>('/user/allUser');
  }
}
