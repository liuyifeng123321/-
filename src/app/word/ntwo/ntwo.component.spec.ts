import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtwoComponent } from './ntwo.component';

describe('NtwoComponent', () => {
  let component: NtwoComponent;
  let fixture: ComponentFixture<NtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
