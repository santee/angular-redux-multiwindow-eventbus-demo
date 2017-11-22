import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EventbusService } from './eventbus.service';
import { EventsLogComponent } from './events-log/events-log.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EventsLogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ EventbusService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
