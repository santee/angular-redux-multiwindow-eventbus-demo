import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { createTodo } from '../todo.store';

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTodoFormComponent implements OnInit {

  public description = '';
  public title = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.store.dispatch( createTodo(this.title, this.description) );
  }
}
