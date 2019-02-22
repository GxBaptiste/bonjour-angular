import { Component, OnInit } from '@angular/core';
import { Personne } from '../models';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  personneNew: Personne = {
    matricule: '',
    pseudo: '',
    URLImage: ''
  }

  constructor(private _srv: DataService) { }

  ngOnInit() {
  }

  aCLique() {
    let obj = this._srv.send(this.personneNew).subscribe();
    console.log(obj)
  }

}
