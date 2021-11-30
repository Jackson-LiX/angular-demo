import { Component, OnInit } from '@angular/core';
import {UserHttpService} from "../../../service/http/user.http.service";
import {User} from "../../../common/interface/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: Array<User> = [];
  constructor(private readonly _userHttpService: UserHttpService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this._userHttpService.getAllUser().subscribe(response => {
      this.userList = response;
    })
  }

}
