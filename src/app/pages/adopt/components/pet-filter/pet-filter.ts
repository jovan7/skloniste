import {Component, effect, inject, output} from '@angular/core';
import {PetFilterCriteria} from '../../../../shared/models/pets.model';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-pet-filter',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './pet-filter.html',
  standalone: true
})
export class PetFilter {
  private fb = inject(FormBuilder);

  readonly filterChange = output<PetFilterCriteria>();

  readonly filterForm = this.fb.group({
    type: '',
    gender: ''
  })

  readonly criteriaSignal = toSignal(this.filterForm.valueChanges);

  constructor() {
    effect(() => {
      const criteria = this.criteriaSignal();
      if (criteria) {
        const cleanedCriteria = Object.fromEntries(
          Object.entries(criteria).filter(([_, v]) => v)
        ) as PetFilterCriteria;
        this.filterChange.emit(cleanedCriteria);
      }
    });
  }

  selectType(typeValue: 'dog' | 'cat' | 'All'): void {
    const valueToSet = typeValue === 'All' ? '' : typeValue;
    this.filterForm.controls.type.setValue(valueToSet, {emitEvent: true});
  }

  getButtonClasses(type: string): string {
    const currentType = this.filterForm.controls.type.value;
    const isActive = currentType === type;
    const baseClasses = "filter-btn px-4 py-2 rounded-lg text-sm transition border border-transparent focus:ring-2";

    if (isActive) {
      return `${baseClasses} bg-white text-gray-800 font-bold shadow-sm hover:shadow-md ring-orange-500`;
    } else {
      return `${baseClasses} bg-transparent text-gray-600 font-medium hover:bg-white hover:shadow-sm`;
    }
  }
}
