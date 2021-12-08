import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ManualRegisterComponentComponent } from './manual-register-component/manual-register-component.component';
import { UserComponent } from './user.component';
@NgModule({
  declarations: [
    AppComponent,
    //ManualRegisterComponentComponent
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
