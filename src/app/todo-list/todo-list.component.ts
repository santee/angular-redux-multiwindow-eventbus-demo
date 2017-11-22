import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EventbusService } from '../eventbus.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = store.select(x => x.todos);
   }

  ngOnInit() {
  }

}
