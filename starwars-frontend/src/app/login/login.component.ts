import { Component } from '@angular/core';
import { UsersService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private _userService: UsersService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit(): void {}

  isLoggedIn(): boolean {
    return localStorage.getItem('userInfo') != null;
  }

  login() {
    this._userService.login().subscribe((data) => {
      console.log('userInfo', data);
      this.saveUserInfo(
        JSON.stringify({token: data.token })
      );
      let urlToGo;
      this._route?.queryParams.forEach((value: any) => {
        if (value?.returnUrl) {
          urlToGo = value?.returnUrl;
        }
      });
      if (urlToGo) {
        this._router.navigate([urlToGo]);
      }
    });
  }

  logout() {
    localStorage.removeItem('userInfo');
  }

  private saveUserInfo(userInfo: string): void {
    localStorage.setItem('userInfo', userInfo);
  }
}
