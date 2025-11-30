import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBox } from './person-box';

describe('PersonBox', () => {
  let component: PersonBox;
  let fixture: ComponentFixture<PersonBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
