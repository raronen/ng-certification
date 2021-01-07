import { Component, Input } from "@angular/core";
import { ZipCode } from "app/models/ZipCode";
import { ZipCodeService } from "app/services/zip-code.service";

@Component({
    selector: "zip-code-card",
    templateUrl: "./zip-code-card.component.html",
    styleUrls: ["./zip-code-card.component.scss"]
})
export class ZipCodeCardComponent {
    @Input() public card: ZipCode;

    public constructor(private zipCodeService: ZipCodeService) {}
    
    public remove(): void {
        this.zipCodeService.removeZipCode(this.card.zipCodeNumber);
    }
}