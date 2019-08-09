import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from "@angular/material";

const includedModules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
];

@NgModule({
  imports: [includedModules],
  exports: [includedModules]
})
export class MaterialModule {}
