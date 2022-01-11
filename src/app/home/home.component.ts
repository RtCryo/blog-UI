import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category: string[];

  constructor(private categoryService: CategoryService) {
    this.category = categoryService.getAllCategory();
   }

  ngOnInit(): void {
  }

}
