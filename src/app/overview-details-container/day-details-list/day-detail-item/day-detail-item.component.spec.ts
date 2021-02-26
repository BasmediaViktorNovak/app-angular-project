import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDetailItemComponent } from './day-detail-item.component';

describe('DayDetailItemComponent', () => {
  let component: DayDetailItemComponent;
  let fixture: ComponentFixture<DayDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
