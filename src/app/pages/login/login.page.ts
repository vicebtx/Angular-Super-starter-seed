import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { FIELDS } from './login.form';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  form = new FormGroup({});
  model: ILoginModel = {
    username: '',
    password: ''
  };

  fields = FIELDS

  constructor(
    private nav: NavController,
    private redux: NgRedux<IAppState>
  ) {

  }

  ngOnInit() {
    // console.log(this.platform.is('core'));
  }

  login() {
    // this.nav.navigateForward('home');
    // if (!this.globalfunctions.isStringEmpty(this.username) && !this.globalfunctions.isStringEmpty(this.password)) {
    //   // let body = `username=${this.username}&password=${this.password}`
    //   let body = { username: this.username, password: this.password };
    //   this.dataService.httpPost("/PGTSentinel/pgtgo_login.php", body, true).subscribe((json) => {
    //     console.log(json);
    //     if (this.globalfunctions.isStringEmpty(json.error)) {
    //       this.dataService.saveAuthToken(json.data);
    //       this.nav.setRoot('Home', {}, {animate: true, direction: 'forward'});
    //     } else {
    //       this.globalfunctions.showAlert(json.error);
    //     }
    //   });

    // } else {
    //   this.globalfunctions.showAlert("Please Complete the fields");
    //   return;
    // }

  }

}

interface ILoginModel {
  username: string,
  password: string
}
