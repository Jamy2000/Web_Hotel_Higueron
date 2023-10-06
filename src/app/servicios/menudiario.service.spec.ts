import { TestBed } from '@angular/core/testing';

import { MenudiarioService } from './menudiario.service';

describe('MenudiarioService', () => {
  let service: MenudiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenudiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
