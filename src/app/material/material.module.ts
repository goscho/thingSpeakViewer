import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatExpansionModule
} from "@angular/material";

const includedModules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatExpansionModule
];

@NgModule({
  imports: [includedModules],
  exports: [includedModules]
})
export class MaterialModule {}
