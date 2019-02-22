import { Component, OnInit } from '@angular/core';
import { Personne } from '../models';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-template-create-collegue',
  templateUrl: './template-create-collegue.component.html',
  styleUrls: ['./template-create-collegue.component.css']
})
export class TemplateCreateCollegueComponent implements OnInit {

  personneNew: Personne = {
    matricule: '',
    pseudo: '',
    URLImage: ''
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {
  }

  aCLique() {
    let obj = this._srv.create(this.personneNew).subscribe();
    // this._srv.refresh();
  }

}
