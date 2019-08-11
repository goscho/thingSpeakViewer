import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { DataOptions } from "../types/data-options";

@Component({
  selector: "app-parameter-form",
  templateUrl: "./parameter-form.component.html",
  styleUrls: ["./parameter-form.component.scss"]
})
export class ParameterFormComponent implements OnInit {
  @Output()
  optionsApplied = new EventEmitter<DataOptions>();

  parameterForm = this.formBuilder.group({
    results: [""],
    days: ["1"],
    minutes: [""],
    start: [""],
    end: [""],
    timezone: ["Europe/Berlin"],
    round: [""],
    timescale: [""],
    sum: [""],
    average: [""],
    median: [""]
  });

  minutesSteps = [10, 15, 20, 30, 60, 240, 720, 1440, "daily"];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  submit() {
    const options = new DataOptions(this.parameterForm.value);
    this.optionsApplied.emit(options);
  }

  reset() {
    this.parameterForm.reset();
  }
}
