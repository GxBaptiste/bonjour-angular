import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { BonjourAvecPrenomComponent } from './bonjour-avec-prenom/bonjour-avec-prenom.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues-component/liste-collegues-component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { VoteDoneComponent } from './vote-done/vote-done.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    BonjourAvecPrenomComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    VoteDoneComponent,
    NouveauCollegueTemplateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
