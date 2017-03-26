//Modules
import { NgModule } from '@angular/core';
import { SharedModule }  from '../shared/shared.module';
import { MessagesSharedModule } from './shared';

//Service
import { MessageService } from './shared/message.service';

@NgModule({

    //Component
    declarations: [],

  //Modules
  imports: [
    SharedModule,
    MessagesSharedModule
  ],
  providers: [ MessageService ]
})

export class MessagesModule {}
