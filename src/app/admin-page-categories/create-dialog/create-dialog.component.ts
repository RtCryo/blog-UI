import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Theme } from 'src/app/_model/theme';
import { ThemeService } from 'src/app/_service/theme.service';

export class CheckedTheme{
  checked!: boolean;
  theme!: Theme;
}

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogCategoryComponent implements OnInit {
  dialogForm: FormGroup;
  themes: Theme[] = [];
  checkedThemes: CheckedTheme[] = [];
  allComplete: boolean = false;
  formThemes: Theme[] = [];

  constructor(public dialogRef: MatDialogRef<CreateDialogCategoryComponent>, private fb: FormBuilder, private themeService: ThemeService) {
    themeService.getAllThemes().subscribe((response) => {
      this.themes = response;
      this.themes.forEach((el) => {
        let t = new CheckedTheme;
        t.theme = new Theme;
        t.theme.name = el.name;
        t.checked = false;
        this.checkedThemes.push(t);
      })
    });
    this.dialogForm = fb.group({
      name: ['', Validators.required],
      themes: [this.formThemes],
    });
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCheckChange(event: any, theme: Theme){
    if(event.checked && this.formThemes.indexOf(theme) < 0){
      this.formThemes.push(theme);
    } else {
      this.formThemes.forEach((el: Theme) => {
        if(el.id == theme.id) {
          this.formThemes.slice(this.formThemes.indexOf(el) + 1);
          return;
        }
      });
    }
  }

  someComplete():boolean{
    if(this.formThemes.length > 0 && !this.allComplete) {
      return true;
    }
    return false;
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

}
