import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalStorageTokenStoreService} from "../auth/local.storage.token.store.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private readonly tokenStorageService: LocalStorageTokenStoreService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.tokenStorageService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenStorageService.getToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
