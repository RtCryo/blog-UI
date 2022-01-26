import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogThemeComponent implements OnInit {
  dialogForm: FormGroup;


  constructor(public dialogRef: MatDialogRef<CreateDialogThemeComponent>, fb: FormBuilder) {
    this.dialogForm = fb.group({
      themeName: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
