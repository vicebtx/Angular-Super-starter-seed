import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  subscription: Subscription;
  isLoggedIn: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private redux: NgRedux<IAppState>
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.subscription = this.redux.select<boolean>('loggedIn').subscribe( value =>{
      console.log('LOGGED IN VALUE CHANGED:: '+ value);
       this.isLoggedIn = value
    });
  }
}
