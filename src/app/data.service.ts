  import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject ('Employee List');
  currentMessage = this.messageSource.asObservable();

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  updateTitle(title) {
    this.change.emit(title);
  }

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
