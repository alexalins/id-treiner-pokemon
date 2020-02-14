/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokeApiService } from './pokeApi.service';

describe('Service: PokeApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeApiService]
    });
  });

  it('should ...', inject([PokeApiService], (service: PokeApiService) => {
    expect(service).toBeTruthy();
  }));
});
