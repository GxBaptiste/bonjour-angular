import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { CollegueDetailComponent } from './collegue-detail/collegue-detail.component';
import { TemplateCreateCollegueComponent } from './template-create-collegue/template-create-collegue.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'form-template', component: NouveauCollegueTemplateFormComponent },
    { path: 'form-template-2', component: TemplateCreateCollegueComponent },
    { path: 'collegues/:matricule', component: CollegueDetailComponent },
    { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];

