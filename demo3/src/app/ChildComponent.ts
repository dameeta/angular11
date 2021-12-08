
import { Component  } from '@angular/core';

@Component({
     selector: 'child-component',
     template: `<h2>Child Component</h2>
            current count is{{count}}
`})

export class ChildComponent{

  count =0;
  increment(){
    this.count++;
  }
  decrement()
  {
    this.count--;
  }
}


// @Component({
//   selector: 'child-component',
//   template: `<h2>Child Component</h2>
        
//         <button (click)="increment()">Increment</button>
//         &nbsp;
//         <button (click)="decrement()">decrement</button>
//         current count is {{count}}
//         `
//         })
// export class ChildComponent {
//   @Input()
//   count!: number;
//   @Output() countChanged : EventEmitter <number> =new EventEmitter();
  
//   increment() {
//     this.count++;
//     this.countChanged.emit(this.count);
//   }
//   decrement() {
//     this.count--;
//     this.countChanged.emit(this.count);
//   }
// }


/* import { Component, Input  } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<h2>Child Component</h2>
               current count is {{ count }}
               <br>
               name is {{name}}
    `
})
export class ChildComponent {
    @Input() count: number | undefined;
    @Input() name: string | undefined;
    //@Input('x1') x1 :any ;
    //@Input('x2') x2 :any ;

} */



// import { Component, Input  } from '@angular/core';

// @Component({
//     selector: 'child-component',
//     inputs: ['count'],
//     template: `<h2>Child Component</h2>
//                current count is {{count}}
//     `
// })
// export class ChildComponent {}
