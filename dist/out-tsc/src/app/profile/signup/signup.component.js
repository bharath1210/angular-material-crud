var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupServ, router) {
        this.signupServ = signupServ;
        this.router = router;
        this.user = {};
    }
    SignupComponent.prototype.userSignup = function () {
        var _this = this;
        console.log(this.user);
        this.signupServ.postSignup(this.user)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error);
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [SignupService,
            Router])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map