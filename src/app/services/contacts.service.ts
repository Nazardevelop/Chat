import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
// Models
import { Contact } from '../models/Contact';
import { CONTACTS } from '../mocks/mock.contacts';

@Injectable()
export class ContactsService {

  constructor() { }

  private contactSelectdSource = new Subject<Contact>();
  public contactSelected$ = this.contactSelectdSource.asObservable();

  public selectContact(contact: Contact): void {
    this.contactSelectdSource.next(contact);
  }

  public getContacts(): Observable<Contact[]> {
    return of(CONTACTS);
  }

}
