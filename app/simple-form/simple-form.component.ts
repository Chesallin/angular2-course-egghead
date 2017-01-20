import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
	<div>
		<input #myInput type="text">
		<!--<button (click)="onClick(myInput.value)">Click Me!</button>-->
		<!--<button (click)="onClick($event)">Click Me!</button>-->
		<!--<button (click)="onClick($event, myInput.value)">Click Me!</button>-->
		<button (click)="onClick($event, myInput.value)">Click Me!</button>
	</div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {


//  onClick(value){
//	console.log(value);
//  }
  
  onClick(event, value){
	console.log(event);
	console.log(value);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
