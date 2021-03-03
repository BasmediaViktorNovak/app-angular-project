import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DayDetailItemComponent} from './day-detail-item.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MaterialModule} from '../../../material-angular-ui/material.module';

describe('DayDetailItemComponent', () => {
  let component: DayDetailItemComponent;
  let fixture: ComponentFixture<DayDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DayDetailItemComponent],
      providers: [MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
