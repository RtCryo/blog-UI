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
      this.params = [];
      event instanceof NavigationEnd? this.url = event.url: "";
      if(this.url && this.url.length > 1) {
        this.params = this.url.split("/");
        if(this.params.length > 2) {
          this.themeName = this.params[2];
        }
        this.categoryName = this.params[1];
      }
    });
  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl("/");
  }

  back() {
    let t = "";
    for (let i = 0; i < this.params.length - 1; i++){
      t += "/"
      t += this.params[i];
    }
    this.router.navigateByUrl(t);
  }

}
