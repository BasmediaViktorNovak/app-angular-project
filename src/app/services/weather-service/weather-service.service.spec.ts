import {WeatherService} from './weather.service';
import {CoordinatesTown} from '../../model-clasess/coordinates-town';
import {asyncData} from '../../../testing/async-observable-helpers';
import {DataTimeWeather} from '../../model-clasess/data-time-weather';

describe('WeatherServiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: WeatherService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WeatherService(httpClientSpy as any);
  });


  // it('should return expected town (HttpClient called once)', () => {
  //
  //   const coordinatesTowns: any[] = [
  //     {
  //       coord: {
  //         lon: -0.1257,
  //         lat: 51.5085,
  //       },
  //       weather: [
  //         {
  //           id: 701,
  //           main: "Mist",
  //           description: "mist",
  //           icon: "50d",
  //         }
  //       ],
  //       base: "stations",
  //       main: {
  //         temp: 281.77,
  //         feels_like: 280.01,
  //         temp_min: 279.15,
  //         temp_max: 282.59,
  //         pressure: 1028,
  //         humidity: 100,
  //       },
  //       visibility: 2000,
  //       wind: {
  //         speed: 2.06,
  //         deg: 70,
  //       },
  //       clouds: {
  //         all: 90
  //       },
  //       dt: 1614776745,
  //       sys: {
  //         type: 1,
  //         id: 1414,
  //         country: "GB",
  //         sunrise: 1614753682,
  //         sunset: 1614793428,
  //       },
  //       timezone: 0,
  //       id: 2643743,
  //       name: "London",
  //       cod: 200,
  //     }
  //   ];
  //
  //   httpClientSpy.get.and.returnValue(asyncData(coordinatesTowns));
  //
  //   const resultTowns = [new CoordinatesTown(coordinatesTowns[0])];
  //
  //   service.getPaginatorElementsTown().subscribe(
  //     coordown => {
  //       console.log('coordown', coordown);
  //       return expect(coordown).toEqual(resultTowns, 'expected towns');
  //     },
  //     fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(4, 'one call');
  // });


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

    service.getSingleCoordinatesTown(2643743).subscribe(item => expect(item).toEqual(coordinatesTowns, 'expected town'),
      fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('test for get week day weather for coordinates', () => {


    // let timeWeather: DataTimeWeather = {
    //     idWeather:1,
    //
    // };

    // httpClientSpy.get.and.returnValue(asyncData(dateTimeWeather));
    service.getWeekDayWeatherForCoords().subscribe(item => {
      console.log('item', item);
    }, fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});



