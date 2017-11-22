import { TestBed, inject } from '@angular/core/testing';

import { TodoEffectsService } from './todo-effects.service';

describe('TodoEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoEffectsService]
    });
  });

  it('should be created', inject([TodoEffectsService], (service: TodoEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
