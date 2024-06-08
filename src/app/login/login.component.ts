import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../store/login.actions';
import { AppState } from '../store/app.state';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private store: Store<AppState>, private router: Router) { }

  login(): void {
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }
}
