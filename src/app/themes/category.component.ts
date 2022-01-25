import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from '../_model/theme';
import { ThemeService } from '../_service/theme.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  themes!: Theme[];
  categoryName: string = "";

  constructor(private themesService: ThemeService, private activatedRoute:ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['categoryName']) {
        this.categoryName = params['categoryName'];
        this.themes = themesService.getAllThemesByCategory(params['categoryName']);
      }
    })
    
  }

  ngOnInit(): void {
  }

}
