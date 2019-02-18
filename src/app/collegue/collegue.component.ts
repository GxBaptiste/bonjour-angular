import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avis, Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue
  message: string
  disabledBtn1 = false;
  disabledBtn2 = false;


  traiter(param: Avis) {
    this._srv.donnerUnAvis(this.collegue, param);
    this.testScore();
  }

  constructor(private _srv: DataService) {
  }

  ngOnInit() {
    this.testScore();
  }


  testScore() {
    if (this.collegue.score >= 5) {
      this.disabledBtn1 = true
    } else {
      this.disabledBtn1 = false
      if (this.collegue.score <= -5) {
        this.disabledBtn2 = true
      } else {
        this.disabledBtn2 = false
      }
    }
  }

}
