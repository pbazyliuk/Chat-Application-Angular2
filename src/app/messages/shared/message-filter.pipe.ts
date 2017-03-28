import { Pipe, PipeTransform } from '@angular/core';
import { Message } from './message.model';

@Pipe({
    name: 'filterMessageByName'
})
    
export class FilterMessageByNamePipe implements PipeTransform {
    public transform(messages: Message[], filterValue: string) {
        if (messages) {
            return messages.filter(message => {
                // let pattern = 
                return message.text.match(new RegExp(filterValue, 'i'));
            });
        } else {
            return messages;
        }
    }
                                 }