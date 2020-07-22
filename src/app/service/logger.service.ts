import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messages: any[] = [];
  change: Subject<any> = new Subject<any>();

  constructor() { }

  log(message: any) {
    this.messages.push(message);
    this.change.next(message);
  }

}
