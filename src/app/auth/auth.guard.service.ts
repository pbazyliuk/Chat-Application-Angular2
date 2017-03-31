import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
//import { AuthService } from "../core/auth.service";
import { UserService } from "app/auth/users";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private  userService: UserService,
                private router: Router){}

    canActivate(){
        //console.log(!this.authService.isLoggedIn);
        if (!this.userService.authenticated){
            this.router.navigate(['auth/login']);
            return false;
        }
        return true;
     }
}