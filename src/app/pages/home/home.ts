import { Component } from '@angular/core';
import {Hero} from './components/hero/hero';
import {Stats} from './components/hero/stats/stats';
import {FeaturedPets} from '../../shared/components/featured-pets/featured-pets';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Stats,
    FeaturedPets
  ],
  templateUrl: './home.html',
  standalone: true
})
export class Home {

}
