import { Component } from '@angular/core';
import { ClockService } from './service/clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private clockService: ClockService) {
  }

  changeIncrement(e) {
    this.clockService.setClockValue(e.target.value);
  }
}
