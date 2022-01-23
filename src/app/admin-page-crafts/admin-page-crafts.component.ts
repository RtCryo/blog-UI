import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Craft } from '../_model/craft';
import { CraftService } from '../_service/craft.service';

@Component({
  selector: 'app-admin-page-crafts',
  templateUrl: './admin-page-crafts.component.html',
  styleUrls: ['./admin-page-crafts.component.css']
})
export class AdminPageCraftsComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['craftName'];
  crafts!: Craft[];
  dataSource: any;

  constructor(craftService: CraftService) {
    craftService.getAllCrafts().subscribe((response) => {
      this.crafts = response;
      this.dataSource = new MatTableDataSource(this.crafts);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCraft(event: Craft) {
    console.log(event)
  }

}
