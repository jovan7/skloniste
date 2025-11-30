import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageHero } from './sub-page-hero';

describe('SubPageHero', () => {
  let component: SubPageHero;
  let fixture: ComponentFixture<SubPageHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPageHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPageHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
