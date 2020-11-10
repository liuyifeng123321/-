import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayjuComponent } from './dayju.component';

describe('DayjuComponent', () => {
  let component: DayjuComponent;
  let fixture: ComponentFixture<DayjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
