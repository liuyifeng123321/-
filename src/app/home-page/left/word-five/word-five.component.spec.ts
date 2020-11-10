import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFiveComponent } from './word-five.component';

describe('WordFiveComponent', () => {
  let component: WordFiveComponent;
  let fixture: ComponentFixture<WordFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
