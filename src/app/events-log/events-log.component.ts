import { Component, OnInit } from '@angular/core';
import { EventbusService } from '../eventbus.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-events-log',
  templateUrl: './events-log.component.html',
  styleUrls: ['./events-log.component.css']
})
export class EventsLogComponent implements OnInit {

  private events$: Observable<any[]>;

  constructor(private eventbus: EventbusService) { }

  ngOnInit() {
    this.events$ = this.eventbus.allMessages.scan((acc: any[], value: any) => [value, ...acc], []);
  }

}
