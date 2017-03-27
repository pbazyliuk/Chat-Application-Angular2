//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ChatsComponent } from './chats.component';
import { ChatDetailsComponent } from './chat-details';
import { ChatHolderComponent } from './chat-holder';
import { ChatNewComponent } from './chat-new';

const chatRoutes: Routes = [
  {
    path: 'new',
    component: ChatNewComponent
  },
  {
    path: '',
    component: ChatsComponent,
    children: [
      {
        path: '',
        component: ChatHolderComponent,
      },
      {
        path: ':id',
        component: ChatDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class ChatsRoutingModule { }
