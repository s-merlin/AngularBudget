import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CVComponent } from './cv/cv.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/loginForm.component';
import { PersonneFormComponent } from './personne/personneForm.component';
import { MyService } from './services/my.services';
import { DepenseComponent } from './depense/depense.component';
import { RentreeComponent } from './rentree/rentree.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { BudgetComponent } from './budget/budget.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { SaisieComponent } from './saisie/saisie.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'rentree', component: RentreeComponent},
  {path: 'depense', component: DepenseComponent},
  {path: 'saisie', component: SaisieComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'utilisateur', component: UtilisateurComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'moncompte', component: MoncompteComponent},
  {path: 'deconnexion', component: DeconnexionComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    PageNotFoundComponent,
    CVComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    PersonneFormComponent,
    DepenseComponent,
    RentreeComponent,
    UtilisateurComponent,
    MoncompteComponent,
    BudgetComponent,
    DeconnexionComponent,
    SaisieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})

export class AppModule { }
