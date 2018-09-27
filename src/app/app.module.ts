import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
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
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
