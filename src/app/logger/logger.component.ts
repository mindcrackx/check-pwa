import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit, OnDestroy {

  messages: any[] = [];
  private subscription: any;

  constructor(private loggerService: LoggerService) {
    //this.messages = this.loggerService.messages;
    this.subscription = this.loggerService.change.subscribe((message) => {
      this.messages.push(message);
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
