import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/_model/category';
import { Theme } from 'src/app/_model/theme';
import { CategoryService } from 'src/app/_service/category.service';
import { ThemeService } from 'src/app/_service/theme.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {
  dialogForm: FormGroup;
  craftName = new FormControl('', [Validators.required]);
  categories: Category[] = [];
  themes: Theme[] = [];

  constructor(fb: FormBuilder, private themeService: ThemeService, private categoryService: CategoryService) {
    categoryService.getAllCategory()
    this.dialogForm = fb.group({

    })
   }

  ngOnInit(): void {
  }

  submit(){

  }

}
