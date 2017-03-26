import { Injectable } from '@angular/core';
import { CHATS } from './mock-chats';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ChatService {
    private search$: BehaviorSubject<string> = new BehaviorSubject('');

    getAll() {
        return Promise.resolve(CHATS);
    }

    public getSearchValue(value: string): void {
        return this.search$.next(value);
    }

    public setSearchValue(): BehaviorSubject<string> {
        return this.search$;
    }
}