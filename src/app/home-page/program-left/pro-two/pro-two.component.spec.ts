import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTwoComponent } from './pro-two.component';

describe('ProTwoComponent', () => {
  let component: ProTwoComponent;
  let fixture: ComponentFixture<ProTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
