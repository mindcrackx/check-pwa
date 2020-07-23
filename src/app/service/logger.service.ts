import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Messages } from '../model/messages';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messages: Messages = new Messages();

  constructor() { }

  log(message: any) {
    this.messages.messages.push(message);
  }

}
