import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoggerComponent } from './logger/logger.component';

import { UpdateService } from './service/update.service';
import { LoggerService } from './service/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [UpdateService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
