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

//Directive
import { HighlightByClickDirective } from './highlight.directive';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    FilterMessageByNamePipe,
    HighlightByClickDirective
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
