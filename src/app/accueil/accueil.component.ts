import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../services/my.services';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [/*MyService*/]
})
export class AccueilComponent implements OnInit {
  test:any[]=['a','b','c'];
  constructor(public router:Router, public myservice:MyService) { }

  ngOnInit() {
    //Verif du user
    var verifuser = this.myservice.getValue();
    if (verifuser == 'inconnu'){
      this.router.navigate(['/login']);
    }
    else{
    }
  }
}
