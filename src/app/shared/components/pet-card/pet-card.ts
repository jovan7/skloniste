import {Component, inject, input, InputSignal} from '@angular/core';
import {Pet} from '../../models/pets.model';
import {PetInfoDialog} from '../pet-info-dialog/pet-info-dialog';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-pet-card',
  imports: [
  ],
  templateUrl: './pet-card.html',
  standalone: true
})
export class PetCard {
  readonly dialog = inject(MatDialog);
  pet = input.required<Pet>({});

  openDialog(data: InputSignal<Pet>, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PetInfoDialog, {
      width: '90%',
      maxWidth: '1140px',
      enterAnimationDuration,
      exitAnimationDuration,
      data
    });
  }
}
