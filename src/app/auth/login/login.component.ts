import { Component, OnInit } from '@angular/core';
import { User } from './login.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
   public user: User;
  
  constructor() {
    this.user = {
        email: '',
        password: ''
    }
  }

  signInSubmit(val) {
    console.log(val);
  }

  ngOnInit() {

  }


}
