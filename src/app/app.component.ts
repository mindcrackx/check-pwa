import { Component, HostListener, OnInit } from '@angular/core';
import { UpdateService } from './service/update.service';
import { LoggerService } from './service/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa-check';
  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e): void {
    console.log(e);
    this.loggerService.log('got beforeinstallprompt event.');
    this.loggerService.log('this means that the pwa has not been installed yet.');
    this.deferredPrompt = e;
    this.showButton = true;
  }

  constructor(private updateService: UpdateService, private loggerService: LoggerService) {
  }

  ngOnInit(): void { }

  checkForUpdate(): void {
    this.updateService.checkForUpdate();
  }

  installPwa(): void {
    this.showButton = false;
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        this.loggerService.log('user accepted the pwa install prompt.');
      } else {
        this.loggerService.log('user dismissed the pwa install prompt.');
      }
    });
  }
}
