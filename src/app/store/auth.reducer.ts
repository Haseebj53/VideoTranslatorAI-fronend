import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './login.actions';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: any;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    isAuthenticated: true,
    token,
    error: null
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    token: null,
    error
  })),
  on(AuthActions.logout, () => initialState)
);

