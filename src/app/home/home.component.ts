import { Component, OnInit } from '@angular/core';
import { Category } from '../_model/category';
import { CategoryService } from '../_service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category!: Category[];

  constructor(private categoryService: CategoryService) {
    categoryService.getAllCategory().subscribe((response) => {
      this.category = response;
    });
   }

  ngOnInit(): void {
  }

}
