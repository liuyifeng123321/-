import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerOneComponent } from './grammer-one.component';

describe('GrammerOneComponent', () => {
  let component: GrammerOneComponent;
  let fixture: ComponentFixture<GrammerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
