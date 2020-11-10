import { TestBed } from '@angular/core/testing';

import { ProdataService } from './prodata.service';

describe('ProdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdataService = TestBed.get(ProdataService);
    expect(service).toBeTruthy();
  });
});
