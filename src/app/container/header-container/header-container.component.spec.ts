import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderContainerComponent} from './header-container.component';
import {AdService} from "./banner/ad.service";

fdescribe('HeaderContainerComponent', () => {
  let component: HeaderContainerComponent;
  let fixture: ComponentFixture<HeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderContainerComponent],
      providers: [AdService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
