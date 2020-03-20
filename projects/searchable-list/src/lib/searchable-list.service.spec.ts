import { TestBed } from '@angular/core/testing';

import { SearchableListService } from './searchable-list.service';

describe('SearchableListService', () => {
  let service: SearchableListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchableListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
