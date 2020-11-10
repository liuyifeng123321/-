import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerThreeComponent } from './grammer-three.component';

describe('GrammerThreeComponent', () => {
  let component: GrammerThreeComponent;
  let fixture: ComponentFixture<GrammerThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammerThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
