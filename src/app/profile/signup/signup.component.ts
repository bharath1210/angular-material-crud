import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user: any = {};
  constructor(
    private signupServ: SignupService,
    private router: Router
  ) { }

  userSignup() {
    console.log(this.user)
    this.signupServ.postSignup(this.user)
    .subscribe((data) => {
      console.log(data);
      this.router.navigate(['/login']);
    },
    (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
