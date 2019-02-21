import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL_BACKEND = environment.backendUrl;
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  subject = new Subject<Vote>();

  listeCollegues: Collegue[] = []

  listeVotes: Observable<Vote>[]

  constructor(private _http: HttpClient) {
  }

  refresh(): Observable<Collegue[]> {
    this.listeCollegues = []
    return this.lister();
  }

  lister(): Observable<Collegue[]> {
    return this.listeCollegues.length > 0 ?
      of(this.listeCollegues) :
      this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`)
        .pipe(
          // comme peek avec les streams Java 8
          tap(tableau => this.listeCollegues = tableau)
        )
  }

  listerVotes(): Observable<Vote> {
    return this.subject.asObservable();
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    let collegue2 = this._http.patch<Collegue>(`${URL_BACKEND}/collegues/` + collegue.pseudo,
      { action: avis }, httpOptions)
    // this.subject.next(collegueVote)
    return collegue2.pipe(
      tap(
        collegueAJour => {
          let aVote = { collegue: collegueAJour, avis }
          this.subject.next(aVote);
        }
      )
    )
  }
}
