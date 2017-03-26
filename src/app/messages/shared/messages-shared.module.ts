//Moduels

import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared';

//Component
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';

//Service
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent,
    MessageNewComponent
  ],
  providers: [MessageService]
})

export class MessagesSharedModule {}
