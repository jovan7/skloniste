import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LayoutService} from '../../../services/layout.service';

@Component({
  selector: 'app-mobile-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './mobile-menu.html',
  standalone: true
})
export class MobileMenu {
  private layoutService = inject(LayoutService);
  isMenuOpen = this.layoutService.isMenuOpen;
}
