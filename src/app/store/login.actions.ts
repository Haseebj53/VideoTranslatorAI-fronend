import { createAction, props } from '@ngrx/store';

export const login = createAction(
  'User Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  'Login Success',
  props<{ token: string }>()
);

export const loginFailure = createAction(
  'Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('Logout');