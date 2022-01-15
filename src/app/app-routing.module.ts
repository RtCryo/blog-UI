import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './themes/category.component';
import { HomeComponent } from './home/home.component';
import { CraftsComponent } from './crafts/crafts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':categoryName', component: CategoryComponent},
  { path: ':categoryName/:themeName', component: CraftsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
