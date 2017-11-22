import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EventbusService } from './eventbus.service';
import { EventsLogComponent } from './events-log/events-log.component';
import { NewTodoFormComponent } from './new-todo-form/new-todo-form.component';
import { todosReducer } from './todo.store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffectsService } from './todo-effects.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EventsLogComponent,
    NewTodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todos: todosReducer }),
    EffectsModule.forRoot([ TodoEffectsService, EventbusService ])
  ],
  providers: [ EventbusService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
