import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayjuProComponent } from './dayju-pro.component';

describe('DayjuProComponent', () => {
  let component: DayjuProComponent;
  let fixture: ComponentFixture<DayjuProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayjuProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayjuProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
