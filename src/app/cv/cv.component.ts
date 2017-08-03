import { Component, OnInit } from '@angular/core';
import {PersonneService, PassService} from '../app.service';
import {MyService} from '../services/my.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [PersonneService, PassService]
})

export class CVComponent implements OnInit {
  personne:any[]
  password:any[]

  constructor(public router:Router, public personneService:PersonneService, public passService: PassService, public myservice: MyService){ }

  ngOnInit() {
    //this.passService.getPassword().subscribe((data) => this.password = data);
    var verifuser = this.myservice.getValue();
    if (verifuser == 'inconnu'){
      alert('redirection vers accueil');
      this.router.navigate(['/accueil']);
    }
    else{
      alert('OkUser');
    }
    this.personneService.getPersonne().subscribe((data) => this.personne = data);
  }

}
