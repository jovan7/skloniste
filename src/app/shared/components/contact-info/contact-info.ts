import {Component, inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Snackbar} from '../snackbar/snackbar';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  standalone: true
})
export class ContactInfo {
  private _snackBar = inject(MatSnackBar);

  copyEmail(data: string) {
    navigator.clipboard.writeText('adoptions@skloniste-pirot.org').then(() => {
      this._snackBar.openFromComponent(Snackbar, {
        data,
        duration: 3000
      });
    });
  }
}
