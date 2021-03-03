import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GridContainerComponent} from './grid-container.component';
import {WeatherService} from '../../services/weather-service/weather.service';
import {MaterialModule} from '../../material-angular-ui/material.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import Spy = jasmine.Spy;


describe('GridContainerComponent', () => {
  let component: GridContainerComponent;
  let fixture: ComponentFixture<GridContainerComponent>;
  let spy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GridContainerComponent],
      providers: [WeatherService, MaterialModule]
    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(GridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Should create', () => {
    component.ngOnInit();
    expect(component).toBeDefined();
  });

  it('Should have a count elements town than 12', () => {
    expect(component.countElementsTown).toBe(12);
  });


  it('On page change event', () => {
    const $event: any = {
      pageIndex: 1,
      pageSize: 5
    };
    spy = spyOn(component, 'OnPageChange').and.callThrough();
    component.OnPageChange($event);
    expect(spy).toHaveBeenCalled();
  });

  it('Change style grid', () => {
    spy = spyOn(component, 'changeStyleGrid').and.callThrough();
    component.changeStyleGrid();
    expect(spy).toHaveBeenCalled();
    component.changeStyleGrid();
    expect(spy).toHaveBeenCalled();
  });


});
