import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChannelInfoComponent } from "./channel-info/channel-info.component";
import { SetupComponent } from "./setup/setup.component";
import { ViewComponent } from "./view/view.component";
import { ParameterFormComponent } from "./parameter-form/parameter-form.component";
import { ChartComponent } from "./chart/chart.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    ChannelInfoComponent,
    SetupComponent,
    ViewComponent,
    ParameterFormComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
