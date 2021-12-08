import { Component, OnInit } from '@angular/core';
import {Router, Route} from '@angular/router';
  //selector: 'app-allproducts',
  @Component({
    selector: 'app-allproducts',
    template: `
    <ul  *ngFor="let x of products">
    <li>{{x.productname}} has an id {{x.productid}} : <button (click)= "displaydetails(x.productid)">Details</button>
    </li>
  </ul>
  
    `,
    styles: [
    ]
  })
export class AllproductsComponent implements OnInit {
  public products = 
  [
{productid:1, productname:"mobile"},
{productid:2, productname:"cosmetics"},
{productid:3, productname:"laptops"},
{productid:4, productname:"bags"}


  ]
  displaydetails(pid:any)
  {
this.router.navigate(['myproduct', pid]);
}
constructor (private router: Router) {}



  ngOnInit(): void {
  }




}