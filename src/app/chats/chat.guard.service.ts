import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../core/auth.service";

@Injectable()
export class ChatGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router){}

    canActivate(){
        console.log(this.authService.isLoggedIn);
        if (this.authService.isLoggedIn){
            this.router.navigate(['chat/']);
            return false;
        }
        return true;
     }
}