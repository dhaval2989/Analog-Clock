import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
 private clockEvent = new ReplaySubject<string>(null);
 clockEventData$ = this.clockEvent.asObservable();

 setClockValue(value) {
   this.clockEvent.next(value);
 }
}
