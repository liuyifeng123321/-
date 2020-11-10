import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NthreeComponent } from './nthree.component';

describe('NthreeComponent', () => {
  let component: NthreeComponent;
  let fixture: ComponentFixture<NthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
