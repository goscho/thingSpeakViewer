import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ThingSpeakService } from "../thing-speak.service";
import { share } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { Channel } from "../types/channel";
import { FormControl } from "@angular/forms";
import { Entry } from "../types/entry";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  channelId: number;
  channel$: Observable<Channel>;
  entries$: Observable<Entry[]>;

  selectedField = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private thingSpeak: ThingSpeakService
  ) {}

  ngOnInit() {
    this.channelId = this.getChannelId();
    // share() prevents multiple subscibers from async pipe in template
    this.channel$ = this.thingSpeak.getChanelInfo(this.channelId).pipe(share());
  }

  private getChannelId(): number {
    return parseInt(this.route.snapshot.paramMap.get("channelId"));
  }

  onFieldChange() {
    this.entries$ = this.thingSpeak.getFieldValues(
      this.channelId,
      this.selectedField.value
    );
    this.addFieldToUrl(this.selectedField.value);
  }

  addFieldToUrl(fieldIndex: number) {
    this.router.navigate(["view", this.channelId, { field: fieldIndex }]);
  }
}
