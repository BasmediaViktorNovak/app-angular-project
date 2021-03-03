import {WeatherService} from './weather.service';
import {CoordinatesTown} from '../../model-clasess/coordinates-town';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {asyncData, asyncError} from '../../../testing/async-observable-helpers';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WeatherServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: WeatherService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(httpClientSpy as any);
  });


  it('should return expected town (HttpClient called once)', () => {

    const coordinatesTowns: CoordinatesTown[] = [
      {
        id: 2643743, coordLat: '51.5085', coordLon: '-0.1257',
        currentWeatherMain: 'Mist', nameCity: 'London', currentWindSpeed: 2.06,
        currentWindDeg: 70, currentTemperatureMainTempMax: 282.59, currentTemperatureMainTempMin: 279.15,
        currentTemperatureMainTemp: 281.77, currentWeatherDescription: 'mist', currentDateTime: '1614776745'
      }
    ];

    httpClientSpy.get.and.returnValue(asyncData(coordinatesTowns));

    service.getPaginatorElementsTown().subscribe(
      coordown => {
        console.log('coordown', coordown);
        return expect(coordown).toEqual(coordinatesTowns, 'expected towns');
      },
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


  // it('should return an get week day weather for coords', () => {
  //   const weekDays: DataTimeWeather =
  //     {
  //       temperatureDay: 283.3,
  //       idWeather: 1,
  //       dt: '1614600000',
  //       windSpeed: 4.07,
  //       windDeg: 85,
  //       mainTemperatureMax: 283.95,
  //       mainTemperatureMin: 277.57,
  //       weatherDescription: 'broken clouds',
  //       weatherMain: 'Clouds',
  //       weatherIcon: '04d'
  //     };
  //
  //   httpClientSpy.get.and.returnValue(asyncData(weekDays));
  //
  //   service.getWeekDayWeatherForCoords(1).subscribe(
  //     day => expect(day).toEqual(weekDays, 'expected weekDays')
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  // });


  it('test for get count elements town', () => {
    service.getCountElementsTown().subscribe(item => expect(item).toBe(12, 'failed get size'), fail);
  });


});


// describe('WeatherServiceService', () => {
//   let spy: jasmine.Spy;
//   let service: WeatherService;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [WeatherService]
//     });
//   });
//
//   beforeEach(() => {
//     service = TestBed.inject(WeatherService);
//   });
//
//
//   it('should return expected town (HttpClient called once)', () => {
//
//     const coordinatesTowns: any[] = [
//       {
//         id: 2643743, coordLat: '51.5085', coordLon: '-0.1257',
//         currentWeatherMain: 'Mist', nameCity: 'London', currentWindSpeed: 2.06,
//         currentWindDeg: 70, currentTemperatureMainTempMax: 282.59, currentTemperatureMainTempMin: 279.15,
//         currentTemperatureMainTemp: 281.77, currentWeatherDescription: 'mist', currentDateTime: '1614776745'
//       }
//     ];
//
//
//     spy = spyOn(service, 'getPaginatorElementsTown').and.callThrough();
//     service.getPaginatorElementsTown().subscribe(items => {
//       console.log('items', items);
//       expect(items).toEqual(coordinatesTowns, 'expected towns');
//     });
//
//     expect(spy).toHaveBeenCalled();
//
//   });
//
//
// });



