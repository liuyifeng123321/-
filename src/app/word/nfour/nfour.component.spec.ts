import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfourComponent } from './nfour.component';

describe('NfourComponent', () => {
  let component: NfourComponent;
  let fixture: ComponentFixture<NfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
