import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalHelp } from './additional-help';

describe('AdditionalHelp', () => {
  let component: AdditionalHelp;
  let fixture: ComponentFixture<AdditionalHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalHelp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalHelp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
