import { Todo } from './todo.model';
import { Action } from '@ngrx/store';

export const LOAD = 'LOAD';
export const CREATE_TODO = 'CREATE_TODO';
export const TODO_CREATED = 'TODO_CREATED';

export interface LoadTodosAction extends Action {
    type: 'LOAD';
}

export interface CreateTodoAction extends Action {
    type: 'CREATE_TODO';
    title: string;
    description: string;
}

export interface TodoActionCreated extends Action {
    type: 'TODO_CREATED';
    todo: Todo;
}

type TodoActions = LoadTodosAction | CreateTodoAction | TodoActionCreated;

export function loadTodos(): LoadTodosAction {
    return { type: 'LOAD' };
}

export function createTodo(title: string, description: string): CreateTodoAction {
    return { type: 'CREATE_TODO', title, description };
}

export function todoCreated(todo: Todo): TodoActionCreated {
    return { type: 'TODO_CREATED', todo };
}

export function todosReducer(todos: Todo[] = [], action: TodoActions): Todo[] {
    switch (action.type) {
        case 'LOAD':
            return todos;
        case 'TODO_CREATED':
            return [...todos, action.todo ];
        default:
            return todos;
    }
}
