import {Component, inject, InputSignal, signal} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import {Pet} from '../../models/pets.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pet-info-dialog',
  imports: [
    MatDialogClose,
    NgOptimizedImage
  ],
  templateUrl: './pet-info-dialog.html',
  standalone: true
})
export class PetInfoDialog {
  readonly pet = inject<InputSignal<Pet>>(MAT_DIALOG_DATA);
  petActiveImage = signal(this.pet().images[0]);
}
