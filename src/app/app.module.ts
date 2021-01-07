import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WEATHER_APP_ID } from './common/InjectionTokens';

import { AppComponent } from './app.component';
import { ZipCodeFormComponent } from './zip-code-form/zip-code-form.component';
import { ZipCodeCardComponent } from "./zip-code-card/zip-code-card.component";
import { ImagePipe } from './common/image.pipe';


@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ZipCodeFormComponent,
    ZipCodeCardComponent,
    ImagePipe
  ],
  providers: [
    { provide: WEATHER_APP_ID, useValue: "5a4b2d457ecbef9eb2a71e480b947604" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
