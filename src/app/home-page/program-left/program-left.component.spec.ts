import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramLeftComponent } from './program-left.component';

describe('ProgramLeftComponent', () => {
  let component: ProgramLeftComponent;
  let fixture: ComponentFixture<ProgramLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
