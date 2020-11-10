import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerTwoComponent } from './grammer-two.component';

describe('GrammerTwoComponent', () => {
  let component: GrammerTwoComponent;
  let fixture: ComponentFixture<GrammerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
