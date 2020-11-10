import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAdminComponent } from './word-admin.component';

describe('WordAdminComponent', () => {
  let component: WordAdminComponent;
  let fixture: ComponentFixture<WordAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
