import {Component, input} from '@angular/core';

@Component({
  selector: 'app-person-box',
  imports: [],
  templateUrl: './person-box.html',
  standalone: true
})
export class PersonBox {
  profileImg = input.required<string>();
  name = input.required<string>();
  role = input.required<string>();
  desc = input.required<string>();
}
