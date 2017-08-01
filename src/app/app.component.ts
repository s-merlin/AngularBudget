import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>`,
  styleUrls: ['./app.component.css'],
  providers: [appService]
})

export class AppComponent {
  title = 'app works!';
  value:string="";

constructor(private _appService: appService){}
  ngOnInit():void
  {
    this.value = this._appService.getApp();
  }
}
