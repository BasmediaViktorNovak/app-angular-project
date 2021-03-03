import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemListContainerComponent} from './item-list-container.component';
import {WeatherService} from '../../../services/weather-service/weather.service';
import {MaterialModule} from '../../../material-angular-ui/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ItemListContainerComponent', () => {
  let component: ItemListContainerComponent;
  let fixture: ComponentFixture<ItemListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ItemListContainerComponent],
      providers: [WeatherService, MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeDefined();
  });
});
