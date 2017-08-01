import { Component, OnInit } from '@angular/core';
import {PersonneService, PassService} from '../app.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [PersonneService, PassService]
})

export class CVComponent implements OnInit {
  personne:any[]
  password:any[]

  constructor(public personneService:PersonneService, public passService: PassService){ }

  ngOnInit() {
    this.passService.getPassword().subscribe((data) => this.password = data);
    this.personneService.getPersonne().subscribe((data) => this.personne = data);
  }

}
