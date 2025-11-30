import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInfoDialog } from './pet-info-dialog';

describe('PetInfoDialog', () => {
  let component: PetInfoDialog;
  let fixture: ComponentFixture<PetInfoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetInfoDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetInfoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
