import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { Messages } from '../model/messages';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  messages: Messages;
  private subscription: any;

  constructor(private loggerService: LoggerService) {
    this.messages = this.loggerService.messages;
  }

  ngOnInit(): void {
  }
}
