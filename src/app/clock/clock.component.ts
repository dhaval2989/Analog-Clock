import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ClockService } from '../service/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, AfterViewInit {

  hourHandStyle;
  minuteHandStyle;
  secondHandStyle;

  isRunning = true;
  timerId: any;

  date: Date;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  inc = 0;
  constructor(private clockService: ClockService) {
  }

  ngAfterViewInit() {
    this.timerId = this.getTime();
  }

  ngOnInit() {
   this.clockService.clockEventData$
      .subscribe(e => {
        this.inc = +e;
      });
  }

  animateAnalogClock() {
    this.hourHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${this.hour * 30 +
        this.minute * 0.5 +
        this.second * (0.5 / 60)}deg)`
    };

    this.minuteHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${this.minute * 6 +
        this.second * 0.1}deg)`
    };

    this.secondHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)`
    };
  }

  getTime() {
    return setInterval(() => {
      let hours;
      this.date = new Date();
      this.date.setHours(this.date.getHours() +  Number(this.inc));
      hours = this.date.getHours();
      console.log(this.date.getHours());
      this.hour = hours;
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      this.animateAnalogClock();
    }, 1000);
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }
}
