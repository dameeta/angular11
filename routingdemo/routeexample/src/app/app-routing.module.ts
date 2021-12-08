import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SpecificproductComponent } from './specificproduct/specificproduct.component';

const routes: Routes = 
[
  

{path:"allproducts", component:AllproductsComponent},
{path:"myproduct/:id", component:SpecificproductComponent}
]

//export const routingcomponents = [Demo1CreateComponent,Demo1DisplayallComponent,Demo2allproductsComponent,Demo2specificproductComponent]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
