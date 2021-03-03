import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderContainerComponent} from './header-container.component';
import {AdService} from './banner/ad.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HeaderContainerComponent', () => {
  let component: HeaderContainerComponent;
  let fixture: ComponentFixture<HeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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
    component.ngOnInit();
    expect(component).toBeTruthy();
  });


});
