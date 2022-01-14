import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { loginAction, LoginComponent } from '../login/login.component';
import { LoginData } from '../_model/loginData';
import { User } from '../_model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value = '';
  followerCount = "32";
  loginData!: LoginData;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(data: loginAction = 'signIn') {
    this.dialog.open<LoginComponent,loginAction, User>(LoginComponent, {
      data,
      position: {
        top: '8rem'
      }
    });
  }

}
