import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonsAdmin } from '../admin-panel/admin-panel.component';

const BUTTON_DATA: ButtonsAdmin[] = [
  {id: 0, linkName: 'Users'},
  {id: 1, linkName: 'Crafts'},
  {id: 2, linkName: 'Themes'},
  {id: 3, linkName: 'Categories'}
]

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  tabIndex!: number;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params['tabName']){
        BUTTON_DATA.forEach((element) => {
          if(element.linkName === params['tabName']){
            this.tabIndex = element.id;
          }
        })
      }
    })
   }

  ngOnInit(): void {
  
  }

}
