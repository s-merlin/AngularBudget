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
  page:string;
  constructor(public router:Router, public myservice: MyService) { 
    //this.useraffiche = this.myservice.getValue();
  }

  ngOnInit() {
    //Verif user pour affichage du menu
    var verifuser = this.myservice.getValue();
    this.useraffiche=verifuser;
  }

  ngDoCheck(){
    this.useraffiche = this.myservice.getValue();
  }

  //redirectmenu
  rdm(param):void{
    //Verification du user pour affichage des onglets
    var verifuser = this.myservice.getValue();
    this.page = param;
    this.useraffiche=verifuser;
    //Redirection vers menu demandé
    this.router.navigate(['/'+param]);
  }

}
