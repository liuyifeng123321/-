import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProThreeComponent } from './pro-three.component';

describe('ProThreeComponent', () => {
  let component: ProThreeComponent;
  let fixture: ComponentFixture<ProThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
