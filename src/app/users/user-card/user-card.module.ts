import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { UserModalModule } from '../user-modal/user-modal.module';



@NgModule({
  declarations: [
    UserCardComponent
  ],
  exports: [
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UserModalModule
  ]
})
export class UserCardModule { }
