import { Injectable } from '@angular/core';
import { MESSAGES } from './mock-messages';
import { BehaviorSubject, Observable } from "rxjs";
import { Message } from "./message.model";

@Injectable()
export class MessageService {
    getMessages(chatId): Observable<Message[]> {
        const messages = MESSAGES.filter((message) => {
            return message.chatId === chatId;
        })
        return Observable.create(observer => observer.next(messages))
    }

    private searchM$: BehaviorSubject<string> = new BehaviorSubject('');

  public setSearchMessageValue(value: string): void {
    this.searchM$.next(value);
  }

   public getSearchMessageValue(): BehaviorSubject<string> {
    return this.searchM$;
  }
}