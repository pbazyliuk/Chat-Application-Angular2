import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ct-chat-navbar',
  styleUrls: ['./chat-navbar.component.css'],
  templateUrl: './chat-navbar.component.html'
})


export class ChatNavbarComponent implements OnInit {
  public isCollapsed: boolean;
  public isMenuShown: boolean;

  @Output() notifyCollapse: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() notifyMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  
  }
  
  collapse() {
    this.isCollapsed = !this.isCollapsed;
    this.notifyCollapse.emit(this.isCollapsed);
  }

  showMenu() {
    this.isMenuShown = !this.isMenuShown;
    console.log(this.isMenuShown);
    this.notifyMenu.emit(this.isMenuShown);
  }

  ngOnInit() {

  }

}
