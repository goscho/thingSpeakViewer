import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ThingSpeakService } from "../thing-speak.service";
import { share, tap, map, switchMap, toArray } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { Channel } from "../types/channel";
import { FormControl } from "@angular/forms";
import { Entry } from "../types/entry";
import { DataOptions } from "../types/data-options";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  channelId: number;
  options: DataOptions;
  channel$: Observable<Channel>;
  entries$: Observable<any[]>;

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
    console.log("--params", this.route.snapshot.params);
  }

  private getChannelId(): number {
    return parseInt(this.route.snapshot.paramMap.get("channelId"));
  }

  onFieldChange() {
    // this.entries$ = this.thingSpeak
    //   .getFieldValues(
    //     this.channelId,
    //     this.selectedField.value,
    //     new DataOptions()
    //   )
    //   .pipe(share());
    this.addFieldToUrl(this.selectedField.value);
  }

  addFieldToUrl(fieldIndex: number) {
    this.router.navigate(["view", this.channelId, { field: fieldIndex }]);
  }

  updateOptions(event: DataOptions) {
    this.entries$ = this.thingSpeak
      .getFieldValues(this.channelId, this.selectedField.value, event)
      .pipe(
        switchMap(entries => from(entries)),
        map(entry => {
          return {
            name: entry.timeStamp,
            value: entry.value
          };
        }),
        toArray(),
        map(data => {
          return [{ name: "Label", series: data }];
        })
      );
  }
}
