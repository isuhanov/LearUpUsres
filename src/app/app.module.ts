import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { API_SERVER_PATH } from './tokens';
import { UsersContainerModule } from './users/users-container/users-container.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersContainerModule
  ],
  providers: [
    {
      provide: API_SERVER_PATH,
      useValue: "http://localhost:3000"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
