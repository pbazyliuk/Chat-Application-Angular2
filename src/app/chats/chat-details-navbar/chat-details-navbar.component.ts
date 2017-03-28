import { Component, OnInit } from '@angular/core';
import { MessageService } from "./../../messages/shared/message.service";


@Component({
  selector: 'ct-chat-details-navbar',
  styleUrls: ['./chat-details-navbar.component.css'],
  templateUrl: './chat-details-navbar.component.html'
})

export class ChatDetailsNavbarComponent implements OnInit {

  constructor(private messageService: MessageService) {

  }

  private searchMessageValue: string = '';

  onBlur(): void {
    this.searchMessageValue = '';
    this.messageService.setSearchMessageValue('');
  }
  
  private onSearchMessageValueChange(value: string): void {
    this.messageService.setSearchMessageValue(value);
  } 


  ngOnInit() {

  }

}
