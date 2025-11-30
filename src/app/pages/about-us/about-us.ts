import { Component } from '@angular/core';
import {SubPageHero} from '../../core/layout/sub-page-hero/sub-page-hero';
import {StoryBlock} from './components/story-block/story-block';
import {Team} from './components/team/team';

@Component({
  selector: 'app-about-us',
  imports: [
    SubPageHero,
    StoryBlock,
    Team
  ],
  templateUrl: './about-us.html',
  standalone: true
})
export class AboutUs {

}
