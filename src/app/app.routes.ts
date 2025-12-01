import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Adopt} from './pages/adopt/adopt';
import {AboutUs} from './pages/about-us/about-us';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'adopt',
    component: Adopt
  },
  {
    path: 'about',
    component: AboutUs
  }
];
