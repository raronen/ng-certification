import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiveDaysForecastComponent } from './five-days-forecast/five-days-forecast.component';
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
    { 
        path: 'forecast/:zipcode',
        component: FiveDaysForecastComponent,
    },
    { path: '**', component: MainViewComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }