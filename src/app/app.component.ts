import { Component } from "@angular/core";
import { ZipCodeService } from "./services/zip-code.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public constructor(public zipCodeService: ZipCodeService) {}
}
