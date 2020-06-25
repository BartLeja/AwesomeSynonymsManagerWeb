import { TestBed } from '@angular/core/testing';

import { SynonymsManagerService } from './synonyms-manager.service';

describe('SynonymsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynonymsManagerService = TestBed.get(SynonymsManagerService);
    expect(service).toBeTruthy();
  });
});
