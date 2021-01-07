import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WEATHER_APP_ID } from './common/InjectionTokens';

import { AppComponent } from './app.component';
import { ZipCodeFormComponent } from './zip-code-form/zip-code-form.component';
import { ZipCodeCardComponent } from "./zip-code-card/zip-code-card.component";
import { ImagePipe } from './common/image.pipe';
import { AppRoutingModule } from './app-routing.module';
import { FiveDaysForecastComponent } from './five-days-forecast/five-days-forecast.component';
import { MainViewComponent } from './main-view/main-view.component';


@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  declarations: [
    AppComponent,
    ZipCodeFormComponent,
    ZipCodeCardComponent,
    FiveDaysForecastComponent,
    MainViewComponent,
    ImagePipe
  ],
  providers: [
    { provide: WEATHER_APP_ID, useValue: "5a4b2d457ecbef9eb2a71e480b947604" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
