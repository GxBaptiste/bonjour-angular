import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  @Input() btn: boolean;
  @Input() btn2: boolean;

  constructor() {
  }

  ngOnInit() {

  }

  CLickJAime() {
    this.change.emit(1)
  }

  CLickJAimePas() {
    this.change.emit(-1)

  }

}
