import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemContainerComponent} from './item-container.component';
import {WeatherService} from '../../../services/weather-service/weather.service';
import {MaterialModule} from '../../../material-angular-ui/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ItemContainerComponent', () => {
  let component: ItemContainerComponent;
  let fixture: ComponentFixture<ItemContainerComponent>;

  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ItemContainerComponent],
      providers: [WeatherService, MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContainerComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeDefined();
  });
});
