import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template driven forms';

  @ViewChild('contactForm') contactForm: NgForm | undefined;

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];


  onSubmit(): void {
    console.log(this.contactForm?.value);
  }



}


export class contact {
  firstname:string | undefined;
  lastname:string | undefined;
  gender:string | undefined;
  email:string | undefined;
  isMarried:boolean | undefined;
  country:string | undefined;
  address: {
    city: string;
    street: string;
    pincode: string;
  } | undefined
} 


export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}