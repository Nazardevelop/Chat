import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  public onSelectUser(contact: Contact): void {
   this.contactSelect.emit(contact);
  }
}
