import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './profile/signup/signup.component';
import { LoginComponent } from './profile/login/login.component';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './bookmanager/create/create.component';
import { ViewComponent } from './bookmanager/view/view.component';
import { EditComponent } from './bookmanager/edit/edit.component';
import { AuthenticationService } from './services/guards/authentication.service';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';


const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'view',
    component: ViewComponent,

  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthenticationService]

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/signup',
    component: SignupComponent
  },
  {
    path: '',
    component: ViewComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
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
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
