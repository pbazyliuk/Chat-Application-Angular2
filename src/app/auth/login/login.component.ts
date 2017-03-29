///<reference path="../../../../node_modules/@types/gapi/index.d.ts"/>
import { Component, OnInit, NgZone } from '@angular/core';
import { User } from './login.model';
import { AuthService } from '../../core/auth.service'
declare let gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  profile;
  username;
  user: User = {
    login: '',
    password: ''
  }

  constructor(private authService: AuthService,
              private zone: NgZone) {

  }

  signInSubmit(formData){
      this.authService.login(formData);
      console.log(this.authService.isLoggedIn);
      console.log(formData.value);
      console.log(formData.controls);
  }
    //fD8EXO7yNoy9C37WtSUoj1uk
  ngOnInit() {
    gapi.load('auth2', () => {
      let auth2 = gapi.auth2.init({
        client_id: '691780650143-enoue9ml105j5vq536t8tp0og195sas5.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      });

      auth2.attachClickHandler(
        document.getElementById('google-custom-button'), {},
        this.onSuccess.bind(this),
        this.onFailure
      );
    });
  }

  onFailure (){}

  onSuccess (user): void {
    this.zone.run(() => {
      this.profile = user.getBasicProfile();
      console.log(this.profile);
      this.username = user.getBasicProfile().getName();
    });
  }
}