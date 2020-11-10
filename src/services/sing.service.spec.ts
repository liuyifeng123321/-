import { TestBed } from '@angular/core/testing';

import { SingService } from './sing.service';

describe('SingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingService = TestBed.get(SingService);
    expect(service).toBeTruthy();
  });
});
