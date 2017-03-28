import { Injectable } from '@angular/core';
import { MESSAGES } from './mock-messages';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {
    getAll(chatId) {
        const messages = MESSAGES.filter((message) => {
            return message.chatId === chatId;
        })
        console.log(messages);
        return Promise.resolve(messages);
    }

    private searchM$: BehaviorSubject<string> = new BehaviorSubject('');

  public setSearchMessageValue(value: string): void {
    this.searchM$.next(value);
  }

   public getSearchMessageValue(): BehaviorSubject<string> {
    return this.searchM$;
  }
}