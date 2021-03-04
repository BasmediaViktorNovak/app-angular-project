import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {OverviewDetailsContainerComponent} from './overview-details-container.component';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../services/weather-service/weather.service';
import {MaterialModule} from '../material-angular-ui/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import Spy = jasmine.Spy;
import {asyncData} from '../../testing/async-observable-helpers';
import {CoordinatesTown} from '../model-clasess/coordinates-town';


describe('OverviewDetailsContainerComponent', () => {
  let component: OverviewDetailsContainerComponent;
  let fixture: ComponentFixture<OverviewDetailsContainerComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let spy: Spy;
  let service: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      declarations: [OverviewDetailsContainerComponent],
      providers: [WeatherService, MaterialModule]
    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDetailsContainerComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
    service = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });


  it('Should test component with Activated Route', fakeAsync(() => {
    component.navigateOnMainPage();
    tick();
    expect(router.url).toBe('/');
    fixture.detectChanges();
  }));


  it('test get single coordinates town', () => {
    const coordinatesTowns: CoordinatesTown =
      {
        id: 2643743, coordLat: '51.5085', coordLon: '-0.1257',
        currentWeatherMain: 'Mist', nameCity: 'London', currentWindSpeed: 2.06,
        currentWindDeg: 70, currentTemperatureMainTempMax: 282.59, currentTemperatureMainTempMin: 279.15,
        currentTemperatureMainTemp: 281.77, currentWeatherDescription: 'mist', currentDateTime: '1614776745'
      };
    spy = spyOn(service, 'getSingleCoordinatesTown').and.callThrough();
    component.getSingleCoordinatesTown();
    expect(spy).toHaveBeenCalled();
  });

});
