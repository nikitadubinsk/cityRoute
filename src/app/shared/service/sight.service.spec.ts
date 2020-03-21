import { TestBed } from '@angular/core/testing';

import { SightService } from './sight.service';

describe('SightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SightService = TestBed.get(SightService);
    expect(service).toBeTruthy();
  });
});
