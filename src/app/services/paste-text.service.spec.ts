import { TestBed, inject } from '@angular/core/testing';

import { PasteTextService } from './paste-text.service';

describe('PasteTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasteTextService]
    });
  });

  it('should be created', inject([PasteTextService], (service: PasteTextService) => {
    expect(service).toBeTruthy();
  }));
});
