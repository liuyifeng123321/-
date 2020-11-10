import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTwoComponent } from './word-two.component';

describe('WordTwoComponent', () => {
  let component: WordTwoComponent;
  let fixture: ComponentFixture<WordTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
