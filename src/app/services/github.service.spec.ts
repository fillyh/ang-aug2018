import { TestBed, inject } from '@angular/core/testing';

import { GithubService } from './github.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubService],
      imports: [ RouterTestingModule, HttpClientModule],
    });
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));
});
