import { Component } from '@angular/core';
import {HelpNeeded} from './help-needed/help-needed';
import {TiersList} from './tiers-list/tiers-list';
import {AdditionalHelp} from './additional-help/additional-help';

@Component({
  selector: 'app-donations',
  imports: [
    HelpNeeded,
    TiersList,
    AdditionalHelp
  ],
  templateUrl: './donations.html',
  standalone: true
})
export class Donations {

}
