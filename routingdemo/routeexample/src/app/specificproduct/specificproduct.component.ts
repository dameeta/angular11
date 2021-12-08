import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-specificproduct',
  template: `
  <h2>You selected product with id {{productid}}</h2>
  
  <a (click)="previousrecord()">Previous Product</a>
<a (click)="nextrecord()">Next Product</a>

  `,
  styles: [
  ]
})
export class SpecificproductComponent implements OnInit {



  public productid:any;
  constructor (private route: ActivatedRoute, private router:Router){}
  ngOnInit()
{

let id= this.route.snapshot.paramMap.get('id');
this.productid=id;

}

previousrecord()
{
let previd= this.productid -1;
this.router.navigate(['/myproduct', previd]);
}

nextrecord()
{
let nextid= this.productid +1;
this.router.navigate(['/myproduct', nextid]);
}
}


