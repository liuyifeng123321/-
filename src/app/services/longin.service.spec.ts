import { TestBed } from '@angular/core/testing';

import { LonginService } from './longin.service';

describe('LonginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LonginService = TestBed.get(LonginService);
    expect(service).toBeTruthy();
  });
});
