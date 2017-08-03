import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MyService} from '../services/my.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  useraffiche:any;
  constructor(public router:Router, public myservice: MyService) { }

  ngOnInit() {
    //Verif user pour affichage du menu
    var verifuser = this.myservice.getValue();
    this.useraffiche=verifuser;
  }

  //redirectmenu
  rdm(param):void{
    //Verification du user pour affichage des onglets
    var verifuser = this.myservice.getValue();
    this.useraffiche=verifuser;
    //Redirection vers menu demandé
    this.router.navigate(['/'+param]);
}

}
