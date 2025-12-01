import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarLabel} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  imports: [
    MatSnackBarLabel
  ],
  templateUrl: './snackbar.html',
  standalone: true
})
export class Snackbar {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {
  }
}
