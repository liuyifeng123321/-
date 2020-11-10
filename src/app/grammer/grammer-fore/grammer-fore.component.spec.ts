import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerForeComponent } from './grammer-fore.component';

describe('GrammerForeComponent', () => {
  let component: GrammerForeComponent;
  let fixture: ComponentFixture<GrammerForeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammerForeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammerForeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
