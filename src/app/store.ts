import { Action } from 'redux';
import { LoginActions } from './app.actions';

export interface IAppState {
  loggedIn: boolean;
}

export const INITIAL_STATE: IAppState = {
  loggedIn: false,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case LoginActions.LOGIN: return { loggedIn: true};
    case LoginActions.LOGOUT: return { loggedIn: false };
  }

  // We don't care about any other actions right now.
  return lastState;
}