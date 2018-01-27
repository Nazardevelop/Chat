import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
// Services
import { ContactsService } from '../services/contacts.service';
import { MessagesService } from '../services/messages.service';
// Models
import { Message } from '../models/message';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public activeContact: Contact;
  public form: FormGroup;
  public messages: Array<Message> = [];

  constructor(private contactService: ContactsService,
              private messageService: MessagesService) {
    this.contactService.contactSelected$.subscribe((contact: Contact) => {
      this.activeContact = contact;
      this.messages = [];
    });
    this.messageService.messageSend$.debounceTime(900).subscribe((message: Message) => {
      this.messages.push(message);
    });
  }

  ngOnInit() {
    this.initForm();
    this.messages = [
      {
        username: 'VasyaPupkin',
        message: 'Privet'
      },
      {
        username: 'You are',
        message: 'Holla'
      }
    ];
  }

  public onFormSubmit(): void {
    if (this.form.valid) {
      const userInput: string = this.form.get('userInput').value;
      this.messages.push(new Message('You are', userInput));
      this.form.reset();
      this.messageService.generateMessage(this.activeContact, userInput);
    }
  }

  private initForm(): void {
    this.form = new FormGroup({
      userInput: new FormControl('', Validators.required)
    });
  }

}
