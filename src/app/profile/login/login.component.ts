import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login: any = {};
  constructor(
    private loginServ: LoginService
  ) { }

userLogin() {
  console.log(this.login)
  this.loginServ.postLogin(this.login)
  .subscribe((data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  });
}

  ngOnInit() {
  }

}
