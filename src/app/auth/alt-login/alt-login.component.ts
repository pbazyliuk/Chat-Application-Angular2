import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users';
declare let gapi: any;

@Component({
  selector: 'app-alt-login',
  templateUrl: './alt-login.component.html',
  styleUrls: ['./alt-login.component.css']
})
export class AltLoginComponent implements OnInit {
  profile;

  constructor(private zone: NgZone,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    gapi.load('auth2', () => {
      let auth2 = gapi.auth2.init({
        client_id: '691780650143-enoue9ml105j5vq536t8tp0og195sas5.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      });
      auth2.attachClickHandler(
        document.getElementById('google-auth-btn'), {},
        this.onSuccess.bind(this),
        this.onFailure
      );
    });
  }

  onFailure() {

  }

  onSuccess(user): void {
    this.zone.run(() => {
      this.profile = user.getBasicProfile();
      console.log(this.profile);
      this.userService.login(this.profile)
      this.router.navigate(['chat']);
    });

    
  }

  onClick() {

  }
}