import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Craft } from '../_model/craft';
import { CraftService } from '../_service/craft.service';
import { CreateDialogCraftComponent } from './create-dialog/create-dialog.component';

@Component({
  selector: 'app-admin-page-crafts',
  templateUrl: './admin-page-crafts.component.html',
  styleUrls: ['./admin-page-crafts.component.css']
})
export class AdminPageCraftsComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'craftName'];
  crafts: Craft[] = [];
  dataSource = new MatTableDataSource<Craft>(this.crafts);
  selection = new SelectionModel<Craft>(true, []);

  constructor(private craftService: CraftService, public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.craftService.getAllCrafts().subscribe((response) => {
      this.crafts = response;
      this.dataSource = new MatTableDataSource<Craft>(this.crafts);
      this.dataSource.paginator = this.paginator;
    })
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: Craft): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCraft(event: Craft) {
    console.log(event)
  }

  createCraftDialog(){
    const dialogRef = this.dialog.open(CreateDialogCraftComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
