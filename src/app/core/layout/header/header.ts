import { Component } from '@angular/core';
import {MenuIcon} from './menu-icon/menu-icon';
import {MobileMenu} from './mobile-menu/mobile-menu';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MenuIcon,
    MobileMenu,
    RouterLink
  ],
  templateUrl: './header.html',
  standalone: true
})
export class Header {

}
