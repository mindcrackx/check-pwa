import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  messages: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.log('logger setup successful.');
    this.log('logger setup successful.');
    this.log('logger setup successful.');
    this.log('logger setup successful.');
  }

  log(message: any): void {
    this.messages.push(message);
  }

}
