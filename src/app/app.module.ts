import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { SearchContactComponent } from './contacts/search-contact/search-contact.component';
import { MessagesComponent } from './messages/messages.component';
// Services
import { MessagesService } from './services/messages.service';
import { ContactsService } from './services/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    SearchContactComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    MessagesService,
    ContactsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
