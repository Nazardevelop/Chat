import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/Contact';
import { get } from 'selenium-webdriver/http';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  contacts: Contact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getContacts();
    this.onSelectUser(this.contacts[0]);
  }

  public getContacts(): void {
     this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  public onSelectUser(contact: Contact): void {
    this.contactsService.selectContact(contact);
  }

}
