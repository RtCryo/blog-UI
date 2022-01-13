import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { LoginData } from '../_model/loginData';

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

  login() {
    this.loginData = {username: "" , password: ""}
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '40%',
      data: {username: "", password: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loginData.username = result.username;
      this.loginData.password = result.password;
    });
  }

}
