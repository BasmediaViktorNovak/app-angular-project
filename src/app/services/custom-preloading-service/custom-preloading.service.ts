import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {

  constructor() {
  }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const loadRoute = (delay) => delay > 0 ? timer(delay).pipe(map(() => fn())) : fn();
    if (route.data && route.data.preload) {
      const delayTime = route.data.loadAfter ? route.data.loadAfter : 0;
      return loadRoute(delayTime);
    } else {
      // The route doesn't have data component, ignore the module
      return of(null);
    }
  }
}
