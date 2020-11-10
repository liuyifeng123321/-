import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordThreeComponent } from './word-three.component';

describe('WordThreeComponent', () => {
  let component: WordThreeComponent;
  let fixture: ComponentFixture<WordThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
