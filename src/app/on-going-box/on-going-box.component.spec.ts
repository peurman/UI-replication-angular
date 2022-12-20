import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingBoxComponent } from './on-going-box.component';

describe('OnGoingBoxComponent', () => {
  let component: OnGoingBoxComponent;
  let fixture: ComponentFixture<OnGoingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnGoingBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnGoingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
