import { TestBed } from '@angular/core/testing';

import { ResulticksProviderService } from './resulticks-provider.service';

describe('ResulticksProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResulticksProviderService = TestBed.get(ResulticksProviderService);
    expect(service).toBeTruthy();
  });
});
