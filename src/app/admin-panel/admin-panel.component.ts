import { Component, OnInit } from '@angular/core';

export interface ButtonsAdmin {
  id: number,
  linkName: string
}

const BUTTON_DATA: ButtonsAdmin[] = [
  {id: 0, linkName: 'Users'},
  {id: 1, linkName: 'Crafts'},
  {id: 2, linkName: 'Themes'},
  {id: 3, linkName: 'Categories'}
]

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  buttons = BUTTON_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
