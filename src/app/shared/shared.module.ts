import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [ErrorDialogComponent] 
})
export class SharedModule { }
