import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};
  constructor(
    private loginServ: LoginService,
    private router: Router
  ) { }

  userLogin() {
    console.log(this.login);
    this.loginServ.postLogin(this.login)

      .subscribe((data: any) => {
        localStorage.setItem('tokenId', data.token);
        this.router.navigate(['/create']);
      },
        (error) => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

}
