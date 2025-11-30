import {Component, inject, InputSignal} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import {Pet} from '../../models/pets.model';

@Component({
  selector: 'app-pet-info-dialog',
  imports: [
    MatDialogClose,
  ],
  templateUrl: './pet-info-dialog.html',
  standalone: true
})
export class PetInfoDialog {
  readonly pet = inject<InputSignal<Pet>>(MAT_DIALOG_DATA);
}
