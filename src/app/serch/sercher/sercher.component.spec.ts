import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SercherComponent } from './sercher.component';

describe('SercherComponent', () => {
  let component: SercherComponent;
  let fixture: ComponentFixture<SercherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SercherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
