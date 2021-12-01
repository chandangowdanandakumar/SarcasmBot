import { TestBed } from '@angular/core/testing';

import { SarcasmbotService } from './sarcasmbot.service';

describe('SarcasmbotService', () => {
  let service: SarcasmbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SarcasmbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
