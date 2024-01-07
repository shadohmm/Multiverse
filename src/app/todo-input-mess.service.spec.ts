import { TestBed } from '@angular/core/testing';

import { TodoInputMessService } from './todo-input-mess.service';

describe('TodoInputMessService', () => {
  let service: TodoInputMessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoInputMessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
