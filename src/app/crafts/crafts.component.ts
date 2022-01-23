import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Craft } from '../_model/craft';
import { CraftService } from '../_service/craft.service';

@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.css']
})
export class CraftsComponent implements OnInit {

  crafts!: Craft[];
  categoryName!: string;
  themeName!: string;
  views: number = 4;
  
  currentFile!: any;
  selectedFile!: any;
  myForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private craftService: CraftService) {
    activatedRoute.params.subscribe((params) => {
      if(params['categoryName'] && params['themeName']) {
        this.categoryName = params['categoryName'];
        this.themeName = params['themeName'];
        //this.crafts = craftService.getCraftsByCategoryAndTheme(params['categoryName'], params['themeName']);
        craftService.getAllCrafts().subscribe((response) => {
          this.crafts = response;
        })
      }
    });

    this.myForm = new FormGroup({
      craftName: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl("/")
  }

  back() {
    this.router.navigateByUrl("/" + this.categoryName);
  }

  selectFile(event: any){
    this.selectedFile = event.target.files;
  }

  submit(){
    if(this.myForm.valid) {
      let t = new Craft;
      t.craftName = this.myForm.controls["craftName"].value;
      t.description = this.myForm.controls["description"].value;
      if(this.selectedFile) {
        t.imageFile = this.currentFile[0].base64;
      }
      this.saveDoneCraft(t);
    }
  }

  saveDoneCraft(craft: Craft){
    this.craftService.saveCraft(craft).subscribe(
      () => {
      }
    )
  }

}
