//Components
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from "rxjs";

//Service
import { MessageService } from '../message.service';

//Model
import { Message } from '../message.model';

@Component({
  selector: 'ct-message-list',
  styleUrls: ['./message-list.component.css'],
  templateUrl: './message-list.component.html'
})

export class MessageListComponent implements OnInit {
    chatId: number;

    messages: Message[];
    subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService
              
              ) {}

  private searchMessageValue: string = '';
   private subscription: Subscription;


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.chatId = +params['id'];
        
        this.subscriptions.push(this.messageService.getMessages(this.chatId).subscribe(
         messages => this.messages = messages, err => console.log(err)
         )
       )
      });

     this.subscriptions.push(this.messageService
      .getSearchMessageValue()
      .subscribe(value => this.searchMessageValue = value)
     )}

  public ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }

}
