import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Theme } from 'src/app/_model/theme';
import { ThemeService } from 'src/app/_service/theme.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogCategoryComponent implements OnInit {
  dialogForm: FormGroup;
  themes!: Theme[];

  constructor(public dialogRef: MatDialogRef<CreateDialogCategoryComponent>, private fb: FormBuilder, private themeService: ThemeService) {
    themeService.getAllThemes().subscribe((response) => {
      this.themes = response;
    })
    
    this.dialogForm = fb.group({
      name: ['', Validators.required],
      themes: new FormArray([])
    })
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCheckChange(event: any, theme: Theme){
    console.log(event);
    if(event.checked){
      this.dialogForm.controls["themes"].value.push(theme);
    } else {
      this.dialogForm.controls["themes"].value.forEach((el: Theme) => {
        if(el.id == theme.id) {
          this.dialogForm.controls["themes"].value.slice(this.dialogForm.controls["themes"].value.indexOf(el) + 1);
          return;
        }
      });
    }
  }

}
