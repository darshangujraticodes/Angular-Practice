import { TestBed } from '@angular/core/testing';

import { DevProfileService } from './dev-profile-service';

describe('DevProfileService', () => {
  let service: DevProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
