import { Component } from "@angular/core";
import { ZipCodeInfo } from "app/models/ZipCodeInfo";

@Component({
    selector: "zip-code-cards-list",
    templateUrl: "./zip-code-cards-list.component.html"
})
export class ZipCodeCardsListComponent {
    public ZipCodeCards: ZipCodeInfo[] = [new ZipCodeInfo(), new ZipCodeInfo()];
}