import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProForeComponent } from './pro-fore.component';

describe('ProForeComponent', () => {
  let component: ProForeComponent;
  let fixture: ComponentFixture<ProForeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProForeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProForeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
