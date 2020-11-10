import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfiveComponent } from './nfive.component';

describe('NfiveComponent', () => {
  let component: NfiveComponent;
  let fixture: ComponentFixture<NfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
