import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DayDetailsListComponent} from './day-details-list.component';
import {WeatherService} from '../../services/weather-service/weather.service';
import {MaterialModule} from '../../material-angular-ui/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DayDetailsListComponent', () => {
  let component: DayDetailsListComponent;
  let fixture: ComponentFixture<DayDetailsListComponent>;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DayDetailsListComponent],
      providers: [WeatherService, MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeDefined();
  });

  it('test for day detail list component', () => {
    spy = spyOn(component, 'selectedWeatherItem').and.callThrough();
    component.selectedWeatherItem();
    expect(spy).toHaveBeenCalled();
  });


});
