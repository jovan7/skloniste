import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedInfo } from './featured-info';

describe('FeaturedInfo', () => {
  let component: FeaturedInfo;
  let fixture: ComponentFixture<FeaturedInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
