//Component
import { Component, OnInit } from '@angular/core';

//Service
import { ChatService } from './shared/chats.service';

//Model
import { Chat } from './shared/chat.model';

@Component({
  selector: 'ct-chats',
  styleUrls: ['./chats.component.css'],
  templateUrl: './chats.component.html'
})

export class ChatsComponent implements OnInit {

  chats: Promise <Chat[]>

  constructor(private chatService: ChatService) {

  }

  ngOnInit() {
    this.chats = this.chatService.getAll();
  }

}
