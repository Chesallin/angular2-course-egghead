import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    "Message 1 (message one)",
    "Message 2 (message two)",
    "Message 3 (message three)"
  ];


  constructor() { }

}