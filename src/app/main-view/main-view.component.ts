import { Component } from "@angular/core";
import { ZipCodeService } from "app/services/zip-code.service";

@Component({
  selector: "main-view",
  templateUrl: "./main-view.component.html"
})
export class MainViewComponent {
  public constructor(public zipCodeService: ZipCodeService) {}
}
