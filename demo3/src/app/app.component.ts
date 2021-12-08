import { Component, ViewChild} from '@angular/core';

import { ChildComponent } from './ChildComponent';

@Component({
    selector: 'app-root',
     template: `
           <h1>{{title}}</h1>
          <p>current count is {{child.count}} </p>
          <button (click)="child.increment()">Increment</button>
        &nbsp;
        <button (click)="child.decrement()">decrement</button>
           <child-component></child-component>
       `,
      styleUrls: ['./app.component.css']
   })
  
   export class AppComponent{
     title = 'Parent with @ViewChild Example';

     @ViewChild(ChildComponent)
  child: ChildComponent = new ChildComponent;

     increment() {
      
      this.child.increment();
    }
    decrement() {
      
      this.child.decrement();
    }}
// @Component({
//   selector: 'app-root',
//   template: `
//         <h1>Welcome to {{title}}!</h1>
//         <p>current count is {{ClickCounter}} </p>
//         <child-component [count] = ClickCounter (countChanged) ="countChangedHandler($event)"></child-component>
//     `,
//     styleUrls: ['./app.component.css']
//  })

//  export class AppComponent{
//   title = 'Component Interaction';
//     ClickCounter = 5;

//     countChangedHandler(count:number)
//     {
//       this.ClickCounter=count;
//       console.log(count);
//     }

//  }
//  @Component({
//   selector: 'app-root',
//   template: `
//         <h1>Welcome to {{title}}!</h1>
//         <button (click)="increment()">Increment</button>
//         &nbsp;
//         <button (click)="decrement()">decrement</button>
        
//         <child-component [count]="Counter" [name]= "Name"></child-component>
        

//         ` 
//          <child-component [name]=Name></child-component>
//         ,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Component Interaction';
//   Counter = 5;
//   Name = "Parent";

//   increment() {
//     this.Counter++;
//   }
//   decrement() {
//     this.Counter--;
//   }
//     display()
//     {

//        this.Name;
//     }
//   }
// }
// function display() {
//   throw new Error('Function not implemented.');
// }

//  */