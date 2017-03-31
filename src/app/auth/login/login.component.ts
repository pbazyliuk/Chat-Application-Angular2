///<reference path="../../../../node_modules/@types/gapi/index.d.ts"/>
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { User } from './login.model';
//import { AuthService } from '../../core/auth.service';
import { Subscription } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from "../users";

declare let gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit, OnDestroy  {
  profile;
  username;

  private user: User = {
    login: '',
    password: ''
  }

  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService,
              private zone: NgZone,
              private router: Router) {

  }

  // signInSubmit(formData){
  //     this.authService.login(formData);
  //     console.log(this.authService.isLoggedIn);
  //     console.log(formData.value);
  //     console.log(formData.controls);
  // }

  private signInSubmit(form: any) {
     
     const data = {
       pass: form.password,
      username: form.email
     };
 
    this.subscriptions.push(
       this.userService
         .login(data)
         .subscribe(this.onLoginSuccess.bind(this), this.onLoginError)
     )
 
   }
    //fD8EXO7yNoy9C37WtSUoj1uk
  ngOnInit() {
    // gapi.load('auth2', () => {
    //   let auth2 = gapi.auth2.init({
    //     client_id: '691780650143-enoue9ml105j5vq536t8tp0og195sas5.apps.googleusercontent.com',
    //     cookiepolicy: 'single_host_origin'
    //   });

    //   auth2.attachClickHandler(
    //     document.getElementById('google-custom-button'), {},
    //     this.onSuccess.bind(this),
    //     this.onFailure
    //   );
    // });
  }

  public ngOnDestroy() {
   this.subscriptions.map(subscription => subscription.unsubscribe());
}
   /**
    *
    * @param form
    * form.email
    * form.password
    */
   


  onLoginError (err){
    console.error(err);
    alert('User not found')
  }

  onLoginSuccess (res: any): void {
        console.log(res);
     this.userService.setUserState(res);
     this.router.navigate(['chat']);
  }
}