import { Component } from '@angular/core';
import { EventbusService } from './eventbus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private eventbus: EventbusService) {
    
  }
}
