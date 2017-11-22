import { Todo } from './todo.model';
import { Action } from '@ngrx/store';

export interface LoadTodosAction extends Action {
    type: 'LOAD';
}

export interface CreateTodoAction extends Action {
    type: 'CREATE';
    title: string;
    description: string;
}

type TodoActions = LoadTodosAction | CreateTodoAction;

export function loadTodos(): LoadTodosAction {
    return { type: 'LOAD' };
}

export function createTodo(title: string, description: string): CreateTodoAction {
    return { type: 'CREATE', title, description };
}

export function todosReducer(todos: Todo[] = [], action: TodoActions): Todo[] {
    switch (action.type) {
        case 'LOAD':
            return todos;
        case 'CREATE':
            return [...todos, new Todo(action.title, action.description) ];
        default:
            return todos;
    }
}
