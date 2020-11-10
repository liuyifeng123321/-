import { TestBed } from '@angular/core/testing';

import { WorddataService } from './worddata.service';

describe('WorddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorddataService = TestBed.get(WorddataService);
    expect(service).toBeTruthy();
  });
});
