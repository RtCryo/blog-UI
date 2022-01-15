import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pathbar',
  templateUrl: './pathbar.component.html',
  styleUrls: ['./pathbar.component.css']
})
export class PathbarComponent implements OnInit {

  categoryName!: string;
  themeName!: string;
  url!: string;
  params!: string[];

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      this.categoryName = "";
      this.themeName = "";
      event instanceof NavigationEnd? this.url = event.url: "";
      if(this.url && this.url.length > 1) {
        this.params = this.url.split("/");
        console.log(this.params, this.url);
        if(this.params.length === 3) {
          this.themeName = this.params[2];
        }
        this.categoryName = this.params[1];
      }
    });
  }

  ngOnInit(): void {
  }

}
