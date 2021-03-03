import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ContainerComponent} from './container.component';
import {WeatherService} from '../services/weather-service/weather.service';
import {MaterialModule} from '../material-angular-ui/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ContainerComponent],
      providers: [WeatherService, MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
