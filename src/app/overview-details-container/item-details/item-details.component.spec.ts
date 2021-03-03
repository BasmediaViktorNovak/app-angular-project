import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemDetailsComponent} from './item-details.component';
import {WeatherService} from '../../services/weather-service/weather.service';
import {MaterialModule} from '../../material-angular-ui/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ItemDetailsComponent],
      providers: [WeatherService, MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeDefined();
  });
});
