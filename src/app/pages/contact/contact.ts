import { Component } from '@angular/core';
import {SubPageHero} from '../../core/layout/sub-page-hero/sub-page-hero';
import {PhoneCard} from './phone-card/phone-card';
import {EmailCard} from './email-card/email-card';

@Component({
  selector: 'app-contact',
  imports: [
    SubPageHero,
    PhoneCard,
    EmailCard
  ],
  templateUrl: './contact.html',
  standalone: true
})
export class Contact {

}
