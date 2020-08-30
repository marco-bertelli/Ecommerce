import { TestBed } from '@angular/core/testing';

import { CustomizeServerService } from './customize-server.service';

describe('CustomizeServerService', () => {
  let service: CustomizeServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomizeServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
