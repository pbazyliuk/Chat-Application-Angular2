//Component
import { Component, OnInit, OnDestroy } from '@angular/core';

//Service
import { ChatService } from './shared/chats.service';

//Model
import { Chat } from './shared/chat.model';

import { Subscription } from "rxjs";

@Component({
  selector: 'ct-chats',
  styleUrls: ['./chats.component.css'],
  templateUrl: './chats.component.html'
})

export class ChatsComponent implements OnInit, OnDestroy {
  public isCollapsed: boolean;
  public isMenuShown: boolean;
  
  chats: Chat[];
  private subscriptions: Subscription[] = [];
  
  constructor(private chatService: ChatService) {

  }

  onNotifyCollapse(message:boolean):void {
    this.isCollapsed = message;
  }

  onNotifyMenu(message:boolean):void {
    this.isMenuShown = message;
  }

  ngOnInit() {
    this.subscriptions.push(this.chatService.getChats().subscribe(
      chats => this.chats = chats,
      err => console.log(err)    
       )
     );
   }
 
    ngOnDestroy(){
     this.subscriptions.map(subscr => subscr.unsubscribe());
    }
  }