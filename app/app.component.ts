import { Component } from '@angular/core';
import { MailService } from './mail.service';

/** Original Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
**/


@Component({
  selector: 'app-root',
  // template: `
  // <div>
  //   <app-simple-form>
  //   </app-simple-form>
  // {{mail.message}}  
  // </div>
  // `
  templateUrl: './app.component.html'
})



export class AppComponent {
  title = "Let's get started!";
  
  constructor(private mail:MailService){
  };
  
}
