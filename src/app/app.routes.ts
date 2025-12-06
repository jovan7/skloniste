import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Adopt} from './pages/adopt/adopt';
import {AboutUs} from './pages/about-us/about-us';
import {Contact} from './pages/contact/contact';

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
  },
  {
    path: 'contact',
    component: Contact
  }
];
