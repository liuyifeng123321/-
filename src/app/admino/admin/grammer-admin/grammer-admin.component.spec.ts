import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerAdminComponent } from './grammer-admin.component';

describe('GrammerAdminComponent', () => {
  let component: GrammerAdminComponent;
  let fixture: ComponentFixture<GrammerAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammerAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
