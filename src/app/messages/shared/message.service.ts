import { Injectable } from '@angular/core';
import { MESSAGES } from './mock-messages';

@Injectable()
export class MessageService {
    getAll(chatId) {
        const messages = MESSAGES.filter((message) => {
            return message.chatId === chatId;
        })
        console.log(messages);
        return Promise.resolve(messages);
    }
}