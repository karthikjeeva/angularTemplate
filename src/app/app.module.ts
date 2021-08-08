import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../app/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/