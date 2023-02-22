import { TestBed } from '@angular/core/testing';

import { JaratserviceService } from './jaratservice.service';

describe('JaratserviceService', () => {
  let service: JaratserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaratserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
