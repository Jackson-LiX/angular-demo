import { Component, OnInit } from '@angular/core';
import { UserHttpService } from "../../service/http/user.http.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {LocalStorageTokenStoreService} from "../../auth/local.storage.token.store.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoginForm: FormGroup;

  constructor(private readonly _tokenStorageService: LocalStorageTokenStoreService,
              private readonly _userHttpService: UserHttpService,
              private readonly _formBuilder: FormBuilder) {
    // Init the login form
    this.userLoginForm = this._formBuilder.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    this._userHttpService.getOauthToken(this.userLoginForm?.get('userName')?.value, this.userLoginForm?.get('password')?.value).subscribe(response => {
      this._tokenStorageService.setToken(response.access_token);
    })
  }

}
