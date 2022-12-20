import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingCardComponent } from './on-going-card.component';

describe('OnGoingCardComponent', () => {
  let component: OnGoingCardComponent;
  let fixture: ComponentFixture<OnGoingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnGoingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnGoingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
