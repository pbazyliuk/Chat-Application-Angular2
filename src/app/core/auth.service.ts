import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
    export class AuthService {
    constructor(private router: Router) {}

        get isLoggedIn() {
            return localStorage.getItem('token') == null ? false : true;
        };

        login(user) {
            if(user) {
                localStorage.setItem('token', 'youlogged');
                 this.router.navigate(['chat/']);
            }
        };

        register() {

        };

        logout() {
            localStorage.removeItem('token');
        }
    }

