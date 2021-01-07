import { Component, OnDestroy } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import { FiveDaysForecast } from "app/models/FiveDaysForecast";
import { WeatherService } from "app/services/weather.service";
import { Observable, Subscription } from "rxjs";
import { map, switchMap } from "rxjs/operators";

@Component({
    selector: "five-days-forecast",
    templateUrl: "./five-days-forecast.component.html"
})
export class FiveDaysForecastComponent implements OnDestroy {
    private forecastSubscription: Subscription;
    public forecast: FiveDaysForecast;
    public today: number = Date.now();

    public constructor(route: ActivatedRoute, weatherService: WeatherService) {
        this.forecastSubscription = route.params.pipe(
            map(params => params.zipcode),
            switchMap((zipcode: string) => weatherService.getZipCode5DaysForecast(zipcode))
        ).subscribe((fiveDaysForecast: FiveDaysForecast) => (this.forecast = fiveDaysForecast));
    }

    public ngOnDestroy(): void {
        this.forecastSubscription.unsubscribe();
    }
}