import { TestBed, inject } from '@angular/core/testing';

import { ProductsServiceService } from './products-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsServiceService],
      imports: [ RouterTestingModule, HttpClientModule],
    });
  });

  it('should be created', inject([ProductsServiceService], (service: ProductsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
