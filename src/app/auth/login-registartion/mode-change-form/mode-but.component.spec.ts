import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeButComponent } from './mode-but.component';

describe('ModeButComponent', () => {
  let component: ModeButComponent;
  let fixture: ComponentFixture<ModeButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeButComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
