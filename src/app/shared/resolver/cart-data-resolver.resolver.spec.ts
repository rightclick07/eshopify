import { TestBed } from '@angular/core/testing';

import { CartDataResolverResolver } from './cart-data-resolver.resolver';

describe('CartDataResolverResolver', () => {
  let resolver: CartDataResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CartDataResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
