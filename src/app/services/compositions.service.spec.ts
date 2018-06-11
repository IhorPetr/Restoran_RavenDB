import { TestBed, inject } from '@angular/core/testing';

import { CompositionsService } from './compositions.service';

describe('CompositionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompositionsService]
    });
  });

  it('should be created', inject([CompositionsService], (service: CompositionsService) => {
    expect(service).toBeTruthy();
  }));
});
