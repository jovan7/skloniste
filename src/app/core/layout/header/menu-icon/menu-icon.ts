import {Component, inject} from '@angular/core';
import {LayoutService} from '../../../services/layout.service';

@Component({
  selector: 'app-menu-icon',
  imports: [],
  templateUrl: './menu-icon.html',
  standalone: true
})
export class MenuIcon {
  private layoutService = inject(LayoutService);

  toggleMenu() {
    this.layoutService.toggleMenu();
  }
}
