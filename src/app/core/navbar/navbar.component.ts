import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isLogged: boolean = localStorage.getItem('token') !== null;

  constructor(private service: AuthService ) {}
  
  logoutAction() {
    this.service.logout(); 
  }

}
