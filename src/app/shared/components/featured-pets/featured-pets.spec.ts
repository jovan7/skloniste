import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPets } from './featured-pets';

describe('FeaturedPets', () => {
  let component: FeaturedPets;
  let fixture: ComponentFixture<FeaturedPets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedPets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
