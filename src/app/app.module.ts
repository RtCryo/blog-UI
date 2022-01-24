import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { NumbersOnlyDirective } from './_directive/numbers-only.directive';
import { CalculatorComponent } from './calculator/calculator.component';
import { CategoryComponent } from './themes/category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CraftsComponent } from './crafts/crafts.component';
import { PathbarComponent } from './pathbar/pathbar.component';
import { InstructionComponent } from './instruction/instruction.component';
import { HttpClientModule } from '@angular/common/http';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminPageUsersComponent } from './admin-page-users/admin-page-users.component';
import { AdminPageCraftsComponent } from './admin-page-crafts/admin-page-crafts.component';
import { AdminPageThemesComponent } from './admin-page-themes/admin-page-themes.component';
import { AdminPageCategoriesComponent } from './admin-page-categories/admin-page-categories.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NumbersOnlyDirective,
    CalculatorComponent,
    CategoryComponent,
    LoginComponent,
    CraftsComponent,
    PathbarComponent,
    InstructionComponent,
    AdminPanelComponent,
    AdminPageComponent,
    AdminPageUsersComponent,
    AdminPageCraftsComponent,
    AdminPageThemesComponent,
    AdminPageCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule, 
    MatFormFieldModule,
    MatProgressBarModule,
    HttpClientModule,
    AlifeFileToBase64Module,
    MatTabsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
