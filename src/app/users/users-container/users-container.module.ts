import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainerComponent } from './users-container.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserCardModule } from '../user-card/user-card.module';



@NgModule({
  declarations: [
    UsersContainerComponent
  ],
  exports :[
    UsersContainerComponent
  ],
  imports: [
    CommonModule,
    UserCardModule
  ]
})
export class UsersContainerModule { }
