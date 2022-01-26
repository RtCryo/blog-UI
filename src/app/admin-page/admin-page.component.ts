import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  tabIndex: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['tabName']){
        BUTTON_DATA.forEach((element) => {
          if(element.linkName === params['tabName']){
            this.tabIndex = element.id;
          }
        })
      } else {
        this.router.navigateByUrl('/admin/Users');
      }
    })
   }

  ngOnInit(): void {
  
  }

  tabIndexChange(){
    BUTTON_DATA.forEach((el) => {
      if(el.id === this.tabIndex) {
        this.router.navigateByUrl("/admin/" + el.linkName);
      }
    })
  }

}
