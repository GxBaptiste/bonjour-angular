import { Component, OnInit, Input, Output } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @Input() listeColleguesAccueil: Collegue[]
  valeur1 = 0;
  valeur2 = 3;


  constructor() { }

  ngOnInit() {
  }


  CLick1() {
    this.valeur1 = 0
    this.valeur2 = 3
  }

  CLick2() {
    this.valeur1 = 3
    this.valeur2 = 6
  }

  CLick3() {
    this.valeur1 = 6
    this.valeur2 = 9
  }

}
