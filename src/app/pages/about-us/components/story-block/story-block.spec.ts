import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBlock } from './story-block';

describe('StoryBlock', () => {
  let component: StoryBlock;
  let fixture: ComponentFixture<StoryBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
