import * as _ from "lodash";
import { Injectable } from "@angular/core";
import { ZipCode } from "../models/ZipCode";
import { ZipCodeInfo } from "../models/ZipCodeInfo";
import { from, Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { WeatherService } from "./weather.service";

@Injectable({
    providedIn: 'root'
})
export class ZipCodeService {
    private static readonly ZIP_CODE_ARRAY_KEY: string = "ZIP_CODE_ARRAY"; 
    private zipCodes: ZipCode[] = [];

    constructor(private weatherService: WeatherService) {
        const zipCodeLocalStorage: string = window.localStorage.getItem(ZipCodeService.ZIP_CODE_ARRAY_KEY);

        const zipCodes: string[] = zipCodeLocalStorage ? JSON.parse(zipCodeLocalStorage) : [];

        this.getZipCodeInfo(zipCodes).subscribe((zipCode: ZipCode) => this.zipCodes.push(zipCode));
        
    }

    public addZipCode(zipCodeNumber: string): void {
        // If already exists
        if (this.zipCodes.filter(z => z.zipCodeNumber == zipCodeNumber).length > 0) {
            return;
        }

        this.getZipCodeInfo([zipCodeNumber]).subscribe((zipCode: ZipCode) => {
            this.zipCodes.push(zipCode);
            this.setLocalStorage();
        },
        () => alert('ZipCode wan\'t found')
        );
    }

    public removeZipCode(zipCodeNumber: string): void {
        _.remove(this.zipCodes, ((z: ZipCode) => z.zipCodeNumber == zipCodeNumber));
        this.setLocalStorage();
    }

    private getZipCodeInfo(zipCodes: string[]): Observable<ZipCode> {
        return from(zipCodes).pipe(
            mergeMap<string, Observable<ZipCode>>((zipCodeNumber: string) => {
                return this.weatherService.getZipCodeCurrentWeather(zipCodeNumber).pipe(
                    map((zipCodeInfo: ZipCodeInfo) => ({ zipCodeNumber, zipCodeInfo}))
                );
            })
        );
    }

    private setLocalStorage(): void {
        localStorage.setItem(ZipCodeService.ZIP_CODE_ARRAY_KEY, JSON.stringify(this.zipCodes.map(z => z.zipCodeNumber)));
    }
}