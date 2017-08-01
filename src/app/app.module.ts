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

const appRoutes: Routes = [
  {path: '', redirectTo:'/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cv', component: CVComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'personne', component: PersonneFormComponent},
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
    PersonneFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
