import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../services/data.service';
import { CollegueComplet } from '../models';

@Component({
  selector: 'app-collegue-detail',
  templateUrl: './collegue-detail.component.html',
  styleUrls: ['./collegue-detail.component.css']
})
export class CollegueDetailComponent implements OnInit {

  collegueComplet: CollegueComplet = {
    matricule: '',
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    photoUrl: '',
    score: 0,
    pseudo: ''
  }

  constructor(private route: ActivatedRoute, private _srv: DataService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // récupération du paramètre id
      const matricule = params.get('matricule');
      this._srv.recupCollegueApi(matricule).subscribe(
        colleguesComp => {
          this.collegueComplet = colleguesComp
        }
      );

    });



  }



}
