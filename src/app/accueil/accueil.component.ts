import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeColleguesAccueil: Collegue[] = []
  valeur1 = 0;
  valeur2 = 3;


  constructor(private _srv: DataService) {

  }

  ngOnInit() {
    this._srv.refresh().subscribe(
      valeur => this.listeColleguesAccueil = valeur
    )
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

  refresh(): void {
    this._srv.refresh().subscribe(
      valeur => this.listeColleguesAccueil = valeur
    )
  }

}
