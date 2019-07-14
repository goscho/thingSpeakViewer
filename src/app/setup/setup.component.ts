import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-setup",
  templateUrl: "./setup.component.html",
  styleUrls: ["./setup.component.scss"]
})
export class SetupComponent implements OnInit {
  constructor(private router: Router) {}

  channelId = new FormControl();

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(["view", this.channelId.value]);
  }
}
