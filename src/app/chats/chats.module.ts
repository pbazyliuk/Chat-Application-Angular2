import { NgModule } from '@angular/core';
import { SharedModule }  from '../shared';
import { ChatsComponent } from './chats.component';
import { ChatListComponent } from './chat-list';
import { ChatDetailsComponent } from './chat-details';
import { ChatNewComponent } from './chat-new';
import { ChatHolderComponent } from './chat-holder';
import { ChatsRoutingModule } from './chats-routing.module';
import { MessagesSharedModule } from '../messages';
import { ChatService } from './shared/chats.service';
import { ChatNavbarComponent } from './chat-navbar/chat-navbar.component';
import { ChatDetailsNavbarComponent } from './chat-details-navbar/chat-details-navbar.component';
import { ChatMenuComponent } from './chat-menu/chat-menu.component';

import { FilterChatByNamePipe } from './shared/chat-filter.pipe';


@NgModule({
  declarations: [
    ChatsComponent,
    ChatListComponent,
    ChatDetailsComponent,
    ChatNewComponent,
    ChatHolderComponent,
    ChatNavbarComponent,
    ChatDetailsNavbarComponent,
    ChatMenuComponent,
    FilterChatByNamePipe
  ],
  imports: [
    SharedModule,
    MessagesSharedModule,
    ChatsRoutingModule
  ],
  providers: [ChatService]
})

export class ChatsModule {}
