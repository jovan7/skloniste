import {Component, inject} from '@angular/core';
import {PetCard} from '../pet-card/pet-card';
import {RouterLink} from '@angular/router';
import {PetsService} from '../../../core/services/pets.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

@Component({
  selector: 'app-featured-pets',
  imports: [
    PetCard,
    RouterLink
  ],
  templateUrl: './featured-pets.html',
  standalone: true
})
export class FeaturedPets {
  private petService = inject(PetsService);
  pets = toSignal(this.petService.getPets().pipe(map(pet => pet.slice(pet.length - 3, pet.length))));
}
