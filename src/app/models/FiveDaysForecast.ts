import { ZipCodeInfo } from "./ZipCodeInfo";

export interface FiveDaysForecast {
        cod: string,
        message: number,
        cnt: number,
        list: ZipCodeInfo[]
}