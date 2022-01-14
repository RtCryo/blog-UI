import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from '../_model/theme';
import { ThemesService } from '../_service/themes.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  themes!: Theme[];
  categoryName: string = "";

  constructor(private themesService: ThemesService, private activatedRoute:ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['categoryName']) {
        this.categoryName = params['categoryName'];
        this.themes = themesService.getAllThemesByCategory(params['categoryName']);
      }
    })
    
  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl("/")
  }

}
