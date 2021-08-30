import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyQuestionsComponent } from './daily-questions.component';

describe('DailyQuestionsComponent', () => {
  let component: DailyQuestionsComponent;
  let fixture: ComponentFixture<DailyQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
