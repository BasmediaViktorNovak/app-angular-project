// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  domainName: 'http://api.openweathermap.org',
  parameters: '/data/2.5',
  parametersCoordinates: '/weather?q=',
  parametersWeatherDays: '/onecall?',
  additionalParametersForWeatherDays: '&exclude=minutely,hourly',
  somewhereAnchor: '&appid=08288f94e8758e1982d73e4865e2895f'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
