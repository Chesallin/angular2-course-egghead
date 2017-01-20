import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
	<div>
    {{message}}
		<input #myInput type="text" [(ngModel)]="message">
		<button (click)="onClick($event, myInput.value)">Click Me!</button>
	</div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {


//  onClick(value){
//	console.log(value);
//  }

  @Input() message;
  
  onClick(event, value){
	console.log(event);
	console.log(value);
  }
  
  constructor() {
    setInterval(()=> this.message = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

}
