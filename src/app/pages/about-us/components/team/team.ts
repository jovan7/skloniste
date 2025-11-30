import { Component } from '@angular/core';
import {PersonBox} from './person-box/person-box';

@Component({
  selector: 'app-team',
  imports: [
    PersonBox
  ],
  templateUrl: './team.html',
  standalone: true
})
export class Team {

}
