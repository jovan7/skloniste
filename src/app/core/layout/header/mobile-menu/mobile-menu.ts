import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {LayoutService} from '../../../services/layout.service';

@Component({
  selector: 'app-mobile-menu',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './mobile-menu.html',
  standalone: true
})
export class MobileMenu {
  private layoutService = inject(LayoutService);
  isMenuOpen = this.layoutService.isMenuOpen;
}
