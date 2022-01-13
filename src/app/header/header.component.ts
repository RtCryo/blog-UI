import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  }

}
