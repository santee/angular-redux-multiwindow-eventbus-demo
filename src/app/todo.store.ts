import { Todo } from './todo.model';
import { Action } from '@ngrx/store';

export const CREATE_TODO = 'CREATE_TODO';
export const TODO_CREATED = 'TODO_CREATED';

export interface CreateTodoAction extends Action {
    type: 'CREATE_TODO';
    title: string;
    description: string;
}

export interface TodoActionCreated extends Action {
    type: 'TODO_CREATED';
    todo: Todo;
}

type TodoActions = CreateTodoAction | TodoActionCreated;

export function createTodo(title: string, description: string): CreateTodoAction {
    return { type: 'CREATE_TODO', title, description };
}

export function todoCreated(todo: Todo): TodoActionCreated {
    return { type: 'TODO_CREATED', todo };
}

export function todosReducer(todos: Todo[] = [], action: TodoActions): Todo[] {
    switch (action.type) {
        case 'TODO_CREATED':
            return [...todos, action.todo ];
        default:
            return todos;
    }
}
