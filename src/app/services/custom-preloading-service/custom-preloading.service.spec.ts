import {TestBed} from '@angular/core/testing';
import {CustomPreloadingService} from './custom-preloading.service';
import {Route, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs';

describe('CustomPreloadingService', () => {
  let service: CustomPreloadingService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    });
    service = TestBed.inject(CustomPreloadingService);
    router = TestBed.inject(Router);
  });

  it('Custom preloading with data!', () => {
    const route: Route[] = [{
      data: {preload: true, loadAfter: 5000}
    }];
    service.preload(route[0], () => new Observable<any>()).subscribe(result => expect(result).toBeNaN());
  });


  it('Custom preloading NOT with data!', () => {
    const route: Route[] = [{
      data: {}
    }];
    service.preload(route[0], () => new Observable<any>()).subscribe(result => expect(result).toEqual(null));
  });


});
