var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './profile/signup/signup.component';
import { LoginComponent } from './profile/login/login.component';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './bookmanager/create/create.component';
import { ViewComponent } from './bookmanager/view/view.component';
import { EditComponent } from './bookmanager/edit/edit.component';
var routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                MenuComponent,
                SignupComponent,
                LoginComponent,
                CreateComponent,
                ViewComponent,
                EditComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                HttpClientModule,
                FlexLayoutModule,
                MatToolbarModule,
                MatButtonModule,
                FormsModule,
                MatInputModule,
                MatFormFieldModule,
                RouterModule.forRoot(routes)
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map