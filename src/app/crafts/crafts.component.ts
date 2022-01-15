import { Component, OnInit } from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private craftService: CraftService) {
    activatedRoute.params.subscribe((params) => {
      if(params['categoryName'] && params['themeName']) {
        this.categoryName = params['categoryName'];
        this.themeName = params['themeName'];
        this.crafts = craftService.getCraftsByCategoryAndTheme(params['categoryName'], params['themeName']);
      }
    })
  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl("/")
  }

  back() {
    this.router.navigateByUrl("/category/" + this.categoryName);
  }

}
