import { TestBed, inject } from '@angular/core/testing';

import { EnhanceServiceService } from './enhance-service.service';

describe('EnhanceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnhanceServiceService]
    });
  });

  it('should be created', inject([EnhanceServiceService], (service: EnhanceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
