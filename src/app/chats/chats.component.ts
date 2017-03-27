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
  public isCollapsed: boolean;
  public isMenuShown: boolean;
  chats: Promise <Chat[]>

  // isCollapsedChild:boolean = true;
  // isCollapsedParent:boolean;
  
  constructor(private chatService: ChatService) {

  }

  onNotifyCollapse(message:boolean):void {
    // alert(message);
    this.isCollapsed = message;
    // this.isCollapsedParent = this.isCollapsed;
    // console.log(this.isCollapsed);

  }

  onNotifyMenu(message:boolean):void {
    // alert(message);
    this.isMenuShown = message;
    
    // this.isCollapsedParent = this.isCollapsed;
    console.log("isMenuShown");

  }

  ngOnInit() {
    this.chats = this.chatService.getAll();
  }

}
