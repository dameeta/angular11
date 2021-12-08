import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customer : Customer ;
  customers : Customer[];
  constructor()
  {
    this.customer = {Id: 101, CName : 'Suresh Thorat'};
    this.customers = [

     { Id: 102,
      CName : 'Diksha Sahil'
     },
     { Id: 103,
      CName : 'Rohini Salve'
     },
    ];
  }
  title = 'custompipedemo';
  
}

export class Customer{
 Id : Number | undefined;

 CName : string | undefined;


}