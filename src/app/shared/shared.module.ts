import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorComponent } from "./validation-error/validation-error.component";
import { PrimaryButtonComponent } from "./primary-button/primary-button.component";
import { FormComponent } from "./form/form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RolePipe } from "./pipes/role/role.pipe";
import { DangerButtonComponent } from "./danger-button/danger-button.component";
import { AlertComponent } from "./alert/alert.component";
import { ErrorComponent } from "./error/error.component";

@NgModule({
  declarations: [
    ValidationErrorComponent,
    PrimaryButtonComponent,
    DangerButtonComponent,
    AlertComponent,
    FormComponent,
    RolePipe,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ValidationErrorComponent,
    PrimaryButtonComponent,
    DangerButtonComponent,
    ErrorComponent,
    AlertComponent,
    FormComponent,
    RolePipe
  ],
  providers: [ RolePipe ]
})
export class SharedModule { }
