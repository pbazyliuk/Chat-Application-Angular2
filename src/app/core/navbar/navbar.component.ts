import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../auth/users';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {
  private username: string = '';
  private subscriptions: Subscription[] = [];

  constructor( private userService: UserService, private router: Router ) {}

  ngOnInit() {
     this.subscriptions.push(
       this.userService
         .getUserState()
         .subscribe(state => this.username = state.username)
     )
  }

  ngOnDestroy() {
     this.subscriptions.map(subscription => subscription.unsubscribe());
   }

  isLogged() {
    return this.userService.authenticated;
  };
  
  logoutAction() {
    this.userService.logout();
    //this.router.navigate(['auth/login']);
  }

}
