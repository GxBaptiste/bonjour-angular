import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vote-done',
  templateUrl: './vote-done.component.html',
  styleUrls: ['./vote-done.component.css']
})
export class VoteDoneComponent implements OnInit {

  message = "Test"
  cpt: number = 0

  constructor(private _srv: DataService) {
    this._srv.listerVotes().subscribe(
      value => {
        this.cpt += 1;
        this.afficherMsg();
      })
  }

  ngOnInit() {
    this.afficherMsg();
  }

  afficherMsg() {
    this.message = "Il y a eu " + this.cpt + " votes"
  }

}
