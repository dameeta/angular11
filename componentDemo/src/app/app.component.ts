import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template : '<h1>This is Sample Component through template...</h1><p>Printing paragraph through the template</p>',
  styles : ['h1{color:blue;font-weight:bold}','p{color:yellow}']
})
export class AppComponent {
  //title = 'componentDemo';
}
