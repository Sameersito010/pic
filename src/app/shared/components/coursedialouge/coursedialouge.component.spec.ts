import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedialougeComponent } from './coursedialouge.component';

describe('CoursedialougeComponent', () => {
  let component: CoursedialougeComponent;
  let fixture: ComponentFixture<CoursedialougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedialougeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursedialougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
