import { TestBed } from '@angular/core/testing';

import { ProtestService } from './protest.service';

describe('ProtestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProtestService = TestBed.get(ProtestService);
    expect(service).toBeTruthy();
  });
});
