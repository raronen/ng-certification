import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ZipCodeInfo } from "../models/ZipCodeInfo";
import { Observable } from "rxjs";
import { WEATHER_APP_ID } from "../common/InjectionTokens";
import { FiveDaysForecast } from "../models/FiveDaysForecast";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    public constructor(private http: HttpClient,  @Inject(WEATHER_APP_ID) private weatherAppId: string) { }

    public getZipCodeCurrentWeather(zipCode: string): Observable<ZipCodeInfo> {
        return this.http.get<ZipCodeInfo>('http://api.openweathermap.org/data/2.5/weather', { 
            params: this.getParams(zipCode)
        })
    }

    public getZipCode5DaysForecast(zipCode: string): Observable<FiveDaysForecast> {
        return this.http.get<FiveDaysForecast>('http://api.openweathermap.org/data/2.5/forecast/daily', { 
            params: this.getParams(zipCode)
        })
    }

    private getParams(zipCode: string): HttpParams {
        return new HttpParams({
            fromObject: {
                zip: zipCode,
                appid: this.weatherAppId
            }
        })
    }
}