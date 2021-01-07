import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private static readonly ZIP_CODE_ARRAY_KEY: string = "ZIP_CODE_ARRAY"; 
    private zipCodes: number[];

    constructor() {
        const zipCodeLocalStorage: string = window.localStorage.getItem(WeatherService.ZIP_CODE_ARRAY_KEY);

        this.zipCodes = zipCodeLocalStorage ? JSON.parse(zipCodeLocalStorage) : [];
    }

    public addZipCode(zipCode: number): void {
        if (this.zipCodes.indexOf(zipCode) !== -1) {
            return;
        }

        this.zipCodes.push(zipCode);
        localStorage.setItem(WeatherService.ZIP_CODE_ARRAY_KEY, JSON.stringify(this.zipCodes));
    }
}