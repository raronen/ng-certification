import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipCodeFormComponent } from './zip-code-form/zip-code-form.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ZipCodeFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
