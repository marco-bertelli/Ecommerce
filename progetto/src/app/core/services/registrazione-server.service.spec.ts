import { TestBed } from '@angular/core/testing';

import { RegistrazioneServerService } from './registrazione-server.service';

describe('RegistrazioneServerService', () => {
  let service: RegistrazioneServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrazioneServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
