import { TestBed } from '@angular/core/testing';

import { WordtestService } from './wordtest.service';

describe('WordtestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordtestService = TestBed.get(WordtestService);
    expect(service).toBeTruthy();
  });
});
