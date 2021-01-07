import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { WeatherService } from "app/services/weather.service";

@Component({
  selector: "zip-code-form",
  templateUrl: "./zip-code-form.component.html",
  styleUrls: ["./zip-code-form.component.css"]
})
export class ZipCodeFormComponent {
  public zipCodeFormGroup = new FormGroup({
    zipCodeInput: new FormControl("", [Validators.pattern(/^\d{5}(?:\d{2})?$/)])
  });

  public constructor(private weatherService: WeatherService) {}

  public addLocation(): void {
    this.weatherService.addZipCode(+this.zipCodeInput.value);
  }

  get zipCodeInput() { return this.zipCodeFormGroup.get('zipCodeInput'); }
}
