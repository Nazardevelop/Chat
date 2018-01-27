import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Message } from '../models/message';
import { Contact } from '../models/Contact';
import { MessageGenerator } from '../messages/message-generator';

@Injectable()
export class MessagesService {

  private messagesSource = new Subject<Message>();
  public messageSend$ = this.messagesSource.asObservable();

  constructor() { }

  public sendMessage(message: Message): void {
    this.messagesSource.next(message);
  }

  public generateMessage(contact: Contact, userMessage: string): void {
    const message = new Message(contact.name, new MessageGenerator(userMessage).message);
    this.sendMessage(message);
  }
}
