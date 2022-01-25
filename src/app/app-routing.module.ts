import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './themes/category.component';
import { HomeComponent } from './home/home.component';
import { CraftsComponent } from './crafts/crafts.component';
import { InstructionComponent } from './instruction/instruction.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'admin/:tabName', component: AdminPageComponent },
  { path: ':categoryName', component: CategoryComponent},
  { path: ':categoryName/:themeName', component: CraftsComponent},
  { path: ':categoryName/:themeName/:id', component: InstructionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
