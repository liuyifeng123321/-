import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProFiveComponent } from './pro-five.component';

describe('ProFiveComponent', () => {
  let component: ProFiveComponent;
  let fixture: ComponentFixture<ProFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
