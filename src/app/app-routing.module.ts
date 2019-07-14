import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SetupComponent } from "./setup/setup.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  { path: "", redirectTo: "/setup", pathMatch: "full" },
  { path: "setup", component: SetupComponent },
  { path: "view/:channelId", component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
