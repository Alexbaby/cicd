
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  constructor() { }
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input()
  dataCount!: number | 0;
  time!: any;
  ngOnInit(): void {
    this.time = new Observable<any>(observer => {
      setInterval(() => {
        observer.next(new Date().toISOString())
      }, 1000)
    })
  }

  sendData() {
    let value = 'hello';
    this.open.emit(value);
  }

}
