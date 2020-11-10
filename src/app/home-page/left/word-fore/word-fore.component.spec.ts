import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordForeComponent } from './word-fore.component';

describe('WordForeComponent', () => {
  let component: WordForeComponent;
  let fixture: ComponentFixture<WordForeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordForeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordForeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
