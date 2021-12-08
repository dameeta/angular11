import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  template: `<div>
                   
  <app-employee-list>  </app-employee-list>        </div>`
    
})
export class AppComponent {
    pageHeader: string = 'Employee Details';
    //firstName : string = 'Tina';
   // lastName : string | undefined ;

    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    badHtml: string = 'Hello <script>alert("Hacked");</script> World';
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
}

}




/* import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nestedcomponent';
}
 */