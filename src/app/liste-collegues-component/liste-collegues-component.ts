import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues-component.html',
  styleUrls: ['./liste-collegues-component.css']
})
export class ListeColleguesComponent implements OnInit {

  @Input() listeCollegues: Collegue[]
  debut: number = 0;
  fin: number = 3;
  p: number = 1
  nbrButton: number;
  tabButton = [];

  clic1(nb: number) {
    this.debut = 3 * nb;
    this.fin = 3 + 3 * nb;
  }

  remplirTab(nbr: number) {

    for (let i = 0; i < nbr; i++) {
      this.tabButton.push(i);
    }
  }

  constructor() { }

  ngOnInit() {
    this.nbrButton = Math.floor(this.listeCollegues.length / 3);
    if (this.listeCollegues.length % 3 != 0 || this.nbrButton === 0) {
      this.nbrButton += 1;
    }
    this.remplirTab(this.nbrButton);


  }

}
