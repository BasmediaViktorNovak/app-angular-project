import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDetailsContainerComponent } from './overview-details-container.component';

describe('OverviewDetailsContainerComponent', () => {
  let component: OverviewDetailsContainerComponent;
  let fixture: ComponentFixture<OverviewDetailsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewDetailsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
