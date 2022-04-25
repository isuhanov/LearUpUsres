import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from './user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserModalComponent
  ],
  exports: [
    UserModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModalModule { }
