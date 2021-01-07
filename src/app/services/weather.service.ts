import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ZipCodeInfo } from "app/models/ZipCodeInfo";
import { Observable } from "rxjs";
import { WEATHER_APP_ID } from "app/common/InjectionTokens";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    
    constructor(private http: HttpClient,  @Inject(WEATHER_APP_ID) private weatherAppId: string) { }

    public getZipCodeCurrentWeather(zipcode: number): Observable<ZipCodeInfo> {
        const params: HttpParams = {
            zip: zipcode,
        }

        return this.http.get<ZipCodeInfo>('http://api.openweathermap.org/data/2.5/weather', {
            params: 
        })
    }
}