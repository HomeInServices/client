import { TestBed, inject } from '@angular/core/testing';

import { DataworkerService } from './dataworker.service';

describe('DataworkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataworkerService]
    });
  });

  it('should be created', inject([DataworkerService], (service: DataworkerService) => {
    expect(service).toBeTruthy();
  }));
});
