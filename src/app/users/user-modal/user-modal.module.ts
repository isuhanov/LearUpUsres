import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from './user-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDadataModule } from '@kolkov/ngx-dadata';



@NgModule({
  declarations: [
    UserModalComponent
  ],
  exports: [
    UserModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxDadataModule
  ]
})
export class UserModalModule { }
