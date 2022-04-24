import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersContainerModule } from './users/users-container/users-container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
