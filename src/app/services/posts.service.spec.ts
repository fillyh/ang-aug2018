import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      imports: [ RouterTestingModule, HttpClientModule],
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
