import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpNeeded } from './help-needed';

describe('HelpNeeded', () => {
  let component: HelpNeeded;
  let fixture: ComponentFixture<HelpNeeded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpNeeded]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpNeeded);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
