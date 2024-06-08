
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import { login, loginSuccess, loginFailure } from './login.actions';
import { switchMap, map, catchError, tap  } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(response =>  loginSuccess({ token: response.token })),
          tap(() => {
            this.router.navigate(['/upload']);
            
          }),
          catchError(error => of(loginFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}
