import {Component, input} from '@angular/core';

@Component({
  selector: 'app-sub-page-hero',
  imports: [],
  templateUrl: './sub-page-hero.html',
  standalone: true
})
export class SubPageHero {
  title = input.required<string>();
  desc = input.required<string>();
  background = input.required<string>();
}
