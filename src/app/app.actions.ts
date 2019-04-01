import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class LoginActions {
  static LOGIN = 'LOGIN';
  static LOGOUT = 'LOGOUT';

  login(): Action {
    return { type: LoginActions.LOGIN };
  }

  logout(): Action {
    return { type: LoginActions.LOGOUT };
  }
}