import { Component, OnInit } from '@angular/core';
import { EventbusService } from '../eventbus.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private eventBus: EventbusService) { }

  ngOnInit() {
    this.eventBus.send('test');
  }

}
