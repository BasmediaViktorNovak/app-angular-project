import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDetailsListComponent } from './day-details-list.component';

describe('DayDetailsListComponent', () => {
  let component: DayDetailsListComponent;
  let fixture: ComponentFixture<DayDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
