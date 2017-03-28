import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat } from '../shared/chat.model';
import { ChatService } from '../shared/chats.service';
  import { Subscription } from "rxjs";

@Component({
  selector: 'ct-chat-list',
  styleUrls: ['./chat-list.component.scss'],
  templateUrl: './chat-list.component.html'
})

export class ChatListComponent implements OnInit {
  @Input() chats: Promise<Chat[]>
  @Input() isCollapsedChild:boolean;
  private selectedId: number;
  private searchValue: string = '';
  private subscription: Subscription;



  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: ChatService) {

  }

  ngOnInit(): void {
     this.subscription = this.service
      .getSearchValue()
      .subscribe(value => this.searchValue = value)
  }

  select(chat: Chat) {
    this.selectedId = chat.id;

    // Navigate with relative link
    this.router.navigate(['chat', chat.id])
    this.searchValue = '';
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
