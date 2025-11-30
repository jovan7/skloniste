import {Component, computed, inject, signal} from '@angular/core';
import {SubPageHero} from '../../core/layout/sub-page-hero/sub-page-hero';
import {PetFilter} from './components/pet-filter/pet-filter';
import {PetsService} from '../../core/services/pets.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {PetCard} from '../../shared/components/pet-card/pet-card';
import {Pet, PetFilterCriteria} from '../../shared/models/pets.model';

@Component({
  selector: 'app-adopt',
  imports: [
    SubPageHero,
    PetFilter,
    PetCard
  ],
  templateUrl: './adopt.html',
  standalone: true
})
export class Adopt {
  petsService = inject(PetsService)

  readonly allPets = toSignal(this.petsService.getPets(), {
    initialValue: [] as Pet[]
  });
  readonly filterCriteria = signal<PetFilterCriteria>({})

  readonly filteredPets = computed(() => {
    const pets = this.allPets();
    const criteria = this.filterCriteria();

    if (!criteria) {
      return pets;
    }

    return pets.filter(pet => {
      if (criteria.type && pet.type !== criteria.type) {
        return;
      }

      if (criteria.gender && pet.gender !== criteria.gender) {
        return;
      }

      return true;
    });
  });

  onFilterChange (criteria: PetFilterCriteria) {
    this.filterCriteria.set(criteria);
  }
}
