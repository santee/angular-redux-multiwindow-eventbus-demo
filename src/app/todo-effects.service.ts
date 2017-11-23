import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { CREATE_TODO, CreateTodoAction, todoCreated } from './todo.store';
import { EventbusService } from './eventbus.service';
import { Todo } from './todo.model';

@Injectable()
export class TodoEffectsService {
  constructor( private actions$: Actions, private eventbus: EventbusService ) { }

  @Effect() todoCreated$ = this.actions$
    .ofType( CREATE_TODO )
    .map( (x: CreateTodoAction) => new Todo(x.title, x.description) )
    .map( todoCreated )
    .do(x => this.eventbus.send(x));
}
