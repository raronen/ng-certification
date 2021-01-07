import { Injectable } from "@angular/core";
import { ZipCodeInfo } from "app/models/ZipCodeInfo";

@Injectable({
    providedIn: 'root'
})
export class ZipeCodeService {
    private static readonly ZIP_CODE_ARRAY_KEY: string = "ZIP_CODE_ARRAY"; 
    private zipCodesInfo: ZipCodeInfo[];

    constructor() {
        const zipCodeLocalStorage: string = window.localStorage.getItem(ZipeCodeService.ZIP_CODE_ARRAY_KEY);

        const zipCodes: number[] = zipCodeLocalStorage ? JSON.parse(zipCodeLocalStorage) : [];
        
    }

    public addZipCode(zipCode: number): void {
        if (this.zipCodes.indexOf(zipCode) !== -1) {
            return;
        }

        this.zipCodes.push(zipCode);
        localStorage.setItem(ZipeCodeService.ZIP_CODE_ARRAY_KEY, JSON.stringify(this.zipCodes));
    }
}