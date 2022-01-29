import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CheckedTheme, CreateDialogCategoryComponent } from 'src/app/admin-page-categories/create-dialog/create-dialog.component';
import { $animations } from 'src/app/login/login-animations';
import { Category } from 'src/app/_model/category';
import { Theme } from 'src/app/_model/theme';
import { CategoryService } from 'src/app/_service/category.service';
import { CraftService } from 'src/app/_service/craft.service';
import { ThemeService } from 'src/app/_service/theme.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css'],
  animations: $animations
})
export class CreateDialogCraftComponent implements OnInit {
  dialogForm: FormGroup;
  categories!: Category[];
  themes: Theme[] = [];
  formThemes: Theme[] = [];
  formCategory!: Category;
  checkedThemes: CheckedTheme[] = [];
  allComplete = false;

  constructor(private categoryService: CategoryService, 
    private themeService: ThemeService, 
    private craftService: CraftService,
    public dialogRef: MatDialogRef<CreateDialogCategoryComponent>, 
    private fb: FormBuilder) {
      this.refreshCategory();
      this.dialogForm = fb.group({
        name: ['', Validators.required],
        category: [this.formCategory]
      });
      categoryService.getAllCategory().subscribe((response) => {
        this.categories = response;
      });
  }

  ngOnInit(): void {
  }

  refreshCategory(){
    this.categoryService.getAllCategory().subscribe(response => {
      this.categories = response;
    })
  }

  refreshThemes(){
    this.checkedThemes = [];
    this.themeService.getAllThemes().subscribe(response => {
      response.forEach(e => {
        let t = new CheckedTheme;
        t.checked = false;
        t.theme = e;
        this.checkedThemes.push(t);
      })
    })
  }

  getThemen(event: any){
    this.themeService.getAllThemesByCategory(event.value).subscribe((response) => {
      this.checkedThemes = [];
      response.forEach(e => {
        let t = new CheckedTheme;
        t.checked = false;
        t.theme = e;
        this.checkedThemes.push(t);
      })
      this.themes = response;
      if(!this.dialogForm.controls['themes']) {
        this.dialogForm.addControl("themes", new FormControl(this.formThemes));
      }
    })
    this.setAll(false);
  }

  setBox(completed: boolean, checkedTheme: CheckedTheme){
    checkedTheme.checked = completed;
    if(completed && this.formThemes.indexOf(checkedTheme.theme) < 0){
      this.formThemes.push(checkedTheme.theme);
    } else if (!completed){
      this.formThemes = this.formThemes.slice(0 ,this.formThemes.indexOf(checkedTheme.theme));
    }
    if(this.formThemes.length === this.themes.length) {
      this.allComplete = true;
    } else {
      this.allComplete = false;
    }
  }

  someComplete():boolean{
    if(this.formThemes.length > 0 && !this.allComplete) {
      return true;
    }
    return false;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if(completed){
      this.checkedThemes.forEach((el) => {
        el.checked = true;
        if(this.formThemes.indexOf(el.theme) < 0){
          this.formThemes.push(el.theme);
        }
      })
    } else {
      this.checkedThemes.forEach((el) => el.checked = false);
      this.formThemes = [];
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
