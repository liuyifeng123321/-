import { TestBed } from '@angular/core/testing';

import { WorddaService } from './wordda.service';

describe('WorddaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorddaService = TestBed.get(WorddaService);
    expect(service).toBeTruthy();
  });
});
