import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Theme } from '../_model/theme';
import { ThemeService } from '../_service/theme.service';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@Component({
  selector: 'app-admin-page-themes',
  templateUrl: './admin-page-themes.component.html',
  styleUrls: ['./admin-page-themes.component.css']
})
export class AdminPageThemesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'themeName'];
  themes: Theme[] = [];
  dataSource = new MatTableDataSource<Theme>(this.themes);
  selection = new SelectionModel<Theme>(true, []);

  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.themeService.getAllThemes().subscribe((response) => {
      this.themes = response;
      this.dataSource = new MatTableDataSource<Theme>(this.themes);
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

  checkboxLabel(row?: Theme): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openTheme(event: Theme) {
    console.log(event)
  }

  createThemeDialog(){
    const dialogRef = this.dialog.open(CreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
