import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(m => !m);
  }
}
