import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {OverviewDetailsContainerComponent} from './overview-details-container.component';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../services/weather-service/weather.service';
import {MaterialModule} from '../material-angular-ui/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import Spy = jasmine.Spy;


describe('OverviewDetailsContainerComponent', () => {
  let component: OverviewDetailsContainerComponent;
  let fixture: ComponentFixture<OverviewDetailsContainerComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let spy: Spy;

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
    fixture.detectChanges();
  });


  it('Should test component with Activated Route', fakeAsync(() => {
    component.navigateOnMainPage();
    tick();
    expect(router.url).toBe('/');
    fixture.detectChanges();
  }));


  /*Доделать*/
  it('Get weekday weather for coordinates', () => {
      spy = spyOn(component, 'getWeekDayWeatherForCoords').and.callThrough();
      component.getWeekDayWeatherForCoords();
      expect(spy).toHaveBeenCalled();
  });


});
