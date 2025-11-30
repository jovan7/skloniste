import {Component, input} from '@angular/core';

@Component({
  selector: 'app-story-block',
  imports: [],
  templateUrl: './story-block.html',
  standalone: true
})
export class StoryBlock {
  image = input.required<string>();
  imageDesc = input<string>();
  title = input.required<string>();
  desc = input.required<string>();
}
