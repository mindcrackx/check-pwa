import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { LoggerComponent } from '../logger/logger.component';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  deferredPrompt: any;

  constructor(private swUpdate: SwUpdate, private loggerService: LoggerService) {
    if (this.swUpdate.isEnabled) {
      this.loggerService.log('Service Worker found :)');
    } else {
      this.loggerService.log('No Service Worker found :(');
    }

    this.swUpdate.available.subscribe(evt => {
      this.loggerService.log('service-worker update is available.');
    });
  }

  checkForUpdate() {
    this.loggerService.log('checking for pwa update.');
    this.swUpdate.checkForUpdate();
  }
}
