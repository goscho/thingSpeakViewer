import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  OnInit
} from "@angular/core";
import { Entry } from "../types/entry";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input()
  entries: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Time";
  showYAxisLabel = true;
  yAxisLabel = "yLabel";
  trimXAxisTicks = true;
  maxXAxisTickLength = 16;

  constructor() {
    console.log("hallo");
  }

  ngOnInit() {
    console.log("init");
  }

  onSelect(event) {
    console.log(event);
  }
}
