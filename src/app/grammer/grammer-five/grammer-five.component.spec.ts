import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerFiveComponent } from './grammer-five.component';

describe('GrammerFiveComponent', () => {
  let component: GrammerFiveComponent;
  let fixture: ComponentFixture<GrammerFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammerFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
