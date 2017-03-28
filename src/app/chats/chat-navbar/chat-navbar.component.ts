import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from "app/chats/shared";

@Component({
  selector: 'ct-chat-navbar',
  styleUrls: ['./chat-navbar.component.css'],
  templateUrl: './chat-navbar.component.html'
})


export class ChatNavbarComponent implements OnInit {
  public isCollapsed: boolean;
  public isMenuShown: boolean;

   private searchValue: string = '';

  @Output() notifyCollapse: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() notifyMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: ChatService) {
  
  }

  onBlur(): void {
    this.searchValue = '';
    this.service.setSearchValue('');
  }
  
  collapse() {
    this.isCollapsed = !this.isCollapsed;
    this.notifyCollapse.emit(this.isCollapsed);
  }

  showMenu() {
    this.isMenuShown = !this.isMenuShown;
    this.notifyMenu.emit(this.isMenuShown);
  }

  private onSearchValueChange(value: string): void {
    this.service.setSearchValue(value);
  }

  ngOnInit() {

  }

}
