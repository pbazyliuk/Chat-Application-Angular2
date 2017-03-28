//Moduels

import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared';

//Component
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';

//Service
import { MessageService } from './message.service';

//Pipe
import { FilterMessageByNamePipe } from './message-filter.pipe';


@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    FilterMessageByNamePipe
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
