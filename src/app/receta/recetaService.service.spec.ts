/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecetaServiceService } from './receta.service';

describe('Service: RecetaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetaServiceService]
    });
  });

  it('should ...', inject([RecetaServiceService], (service: RecetaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
