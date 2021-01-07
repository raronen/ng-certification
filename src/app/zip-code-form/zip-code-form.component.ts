import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ZipeCodeService } from "app/services/zip-code.service";

@Component({
  selector: "zip-code-form",
  templateUrl: "./zip-code-form.component.html",
  styleUrls: ["./zip-code-form.component.css"]
})
export class ZipCodeFormComponent {
  public zipCodeFormGroup = new FormGroup({
    zipCodeInput: new FormControl("", [Validators.pattern(/^\d{5}(?:\d{2})?$/)])
  });

  public constructor(private zipCodeService: ZipeCodeService) {}

  public addLocation(): void {
    this.zipCodeService.addZipCode(+this.zipCodeInput.value);
  }

  get zipCodeInput() { return this.zipCodeFormGroup.get('zipCodeInput'); }
}
