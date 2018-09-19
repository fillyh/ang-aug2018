import { TestBed, inject } from '@angular/core/testing';

import { TokenService } from './token.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService],
      imports: [ RouterTestingModule, HttpClientModule],
    });
  });

  it('should be created', inject([TokenService], (service: TokenService) => {
    expect(service).toBeTruthy();
  }));
});
