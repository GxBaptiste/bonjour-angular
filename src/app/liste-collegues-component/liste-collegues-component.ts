import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues-component.html',
  styleUrls: ['./liste-collegues-component.css']
})
export class ListeColleguesComponent implements OnInit {

  @Input() listeCollegues: Collegue[]
  @Input() val1: number
  @Input() val2: number

  constructor() { }

  ngOnInit() {
  }



}
