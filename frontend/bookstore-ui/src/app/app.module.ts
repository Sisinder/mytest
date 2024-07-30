import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { CommonUtilService } from './services/common-util.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonComponentsModule } from './modules/common-components.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  exports: [CommonComponentsModule,MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
