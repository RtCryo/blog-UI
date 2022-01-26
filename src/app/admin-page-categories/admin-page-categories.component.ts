import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Category } from '../_model/category';
import { Theme } from '../_model/theme';
import { CategoryService } from '../_service/category.service';
import { ThemeService } from '../_service/theme.service';
import { CreateDialogCategoryComponent } from './create-dialog/create-dialog.component';

@Component({
  selector: 'app-admin-page-categories',
  templateUrl: './admin-page-categories.component.html',
  styleUrls: ['./admin-page-categories.component.css']
})
export class AdminPageCategoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Theme>;
  displayedColumns: string[] = ['select', 'categoryName'];
  categories: Category[] = [];
  themes: Theme[] = [];
  dataSource = new MatTableDataSource<Category>(this.categories);
  selection = new SelectionModel<Category>(true, []);

  constructor(private categoryService: CategoryService, private themeService: ThemeService, public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.refreshCategory();
  }

  refreshCategory(){
    this.categoryService.getAllCategory().subscribe((response) => {
      this.categories = response;
      this.dataSource = new MatTableDataSource<Category>(this.categories);
      this.table.renderRows();
    });
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

  checkboxLabel(row?: Category): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCategory(event: Category) {
    console.log(event)
  }

  createCategoryDialog(){
    
    const dialogRef = this.dialog.open(CreateDialogCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result.name) {
        let t = new Category;
        t.name = result.name;
        t.themes = result.themes;
        this.categoryService.createCategory(t).subscribe(() => {
          this.refreshCategory();
        })
      }
    });
  }

  removeData(){
    this.categoryService.deleteCategories(this.selection.selected).subscribe(() => {
      this.refreshCategory();
    })
  }

}
