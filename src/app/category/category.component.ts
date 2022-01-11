import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from '../_model/theme';
import { ThemesService } from '../_service/themes.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  themes!: Theme[];

  constructor(private themesService: ThemesService, private activatedRoute:ActivatedRoute,) {
    activatedRoute.params.subscribe((params) => {
      if(params['categoryName']) {
        this.themes = themesService.getAllThemesByCategory(params['categoryName']);
      }
    })
    
  }

  ngOnInit(): void {
  }

}
