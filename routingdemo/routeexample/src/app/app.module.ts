import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SpecificproductComponent } from './specificproduct/specificproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AllproductsComponent,
    SpecificproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
