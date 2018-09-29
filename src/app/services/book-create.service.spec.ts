import { TestBed, inject } from '@angular/core/testing';

import { BookCreateService } from './book-create.service';

describe('BookCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookCreateService]
    });
  });

  it('should be created', inject([BookCreateService], (service: BookCreateService) => {
    expect(service).toBeTruthy();
  }));
});
