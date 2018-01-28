import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
// services
import { ContactsService } from '../../services/contacts.service';
// models
import { Contact } from '../../models/Contact';
@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {
debugger;
  @Output() contactChose: EventEmitter<Contact> = new EventEmitter<Contact>();
  public contacts: Array<Contact>;
  public myControl: FormControl = new FormControl();
  public filteredContacts: Array<Contact>;
  public isError: boolean;

  constructor( private contactsService: ContactsService ) {
    this.filteredContacts = [];
    this.isError = false;
   }
  ngOnInit() {
    this.myControl.valueChanges.subscribe(word => this.filter(word));
  }

  public getContacts(): void {
    this.contactsService.getContacts()
     .subscribe(contacts => this.contacts = contacts);
 }

 public onClick(): void {
   this.getContacts();
 }

 public onLeave(): void {
 }

public onFormSubmit(): void {
  this.filteredContacts.forEach((contact) => {
    if (contact.name.toLocaleLowerCase === this.myControl.value.toLocaleLowerCase) {
      this.contactChose.emit(contact);
      this.myControl.reset();
    } else {
      this.isError = true;
    }
  });
}

public filter(val: string): void {
  // console.log('val:', val);
  this.filteredContacts = [];
  this.isError = false;
   this.contacts.filter((contact: Contact) => {
     if (val) {
      if (contact.name.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1 ||
      contact.surname.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1) {
        // console.log(contact);
          this.filteredContacts.push(contact);
       //  console.log(this.filteredContacts);
      }
     } else {
      if (contact.name.toLocaleLowerCase().indexOf(val) > -1 ||
      contact.surname.toLocaleLowerCase().indexOf(val) > -1) {
        // console.log(contact);
          this.filteredContacts.push(contact);
        // console.log(this.filteredContacts);
      }
     }
  } );
}
public chooseContact(contact: Contact): void {
  this.contactChose.emit(contact);
}
}
