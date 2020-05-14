import { TestBed } from '@angular/core/testing';

import { SubuserviceService } from './subuservice.service';

describe('SubuserviceService', () => {
  let service: SubuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
