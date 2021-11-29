import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private readonly _httpClient: HttpClient) { }

  getOauthToken(userName: string, password: string) {
    return this._httpClient.post('/oauth/token', null, {
      params: {
        client_id: 'demo_user',
        scope: 'trust',
        grant_type: 'password',
        username: userName,
        password: password
      }
    })
  }
}
