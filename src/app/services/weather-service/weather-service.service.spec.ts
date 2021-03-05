import {WeatherService} from './weather.service';
import {CoordinatesTown} from '../../model-clasess/coordinates-town';
import {asyncData} from '../../../testing/async-observable-helpers';

describe('WeatherServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: WeatherService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(httpClientSpy as any);
  });

  it('test for get count elements town', () => {
    service.getCountElementsTown().subscribe(item => expect(item).toBe(12, 'failed get size'), fail);
  });

  it('test for get single coordinates town', () => {
    const coordinatesTowns: CoordinatesTown =
      {
        id: 2643743, coordLat: '51.5085', coordLon: '-0.1257',
        currentWeatherMain: 'Mist', nameCity: 'London', currentWindSpeed: 2.06,
        currentWindDeg: 70, currentTemperatureMainTempMax: 282.59, currentTemperatureMainTempMin: 279.15,
        currentTemperatureMainTemp: 281.77, currentWeatherDescription: 'mist', currentDateTime: '1614776745'
      };

    httpClientSpy.get.and.returnValue(asyncData(coordinatesTowns));

    service.getSingleCoordinatesTownForID(2643743).subscribe(item => expect(item).toEqual(coordinatesTowns, 'expected town'),
      fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


});



