import { Component, OnInit, Input } from "@angular/core";
import { ThingSpeakChannel } from "../types/thing-speak-channel";

@Component({
  selector: "app-channel-info",
  templateUrl: "./channel-info.component.html",
  styleUrls: ["./channel-info.component.scss"]
})
export class ChannelInfoComponent implements OnInit {
  @Input()
  channel: ThingSpeakChannel;

  constructor() {}

  ngOnInit() {}
}
