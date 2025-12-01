import {Component, inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Snackbar} from '../../../../shared/components/snackbar/snackbar';

@Component({
  selector: 'app-help-needed',
  imports: [],
  templateUrl: './help-needed.html',
  standalone: true
})
export class HelpNeeded {

  private _snackBar = inject(MatSnackBar);

  copyBankAccount(data: string) {
    navigator.clipboard.writeText('265-4310310001206-72').then(() => {
      this._snackBar.openFromComponent(Snackbar, {
        data,
        duration: 3000
      });
    });
  }
}

