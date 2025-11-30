import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFilter } from './pet-filter';

describe('PetFilter', () => {
  let component: PetFilter;
  let fixture: ComponentFixture<PetFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
