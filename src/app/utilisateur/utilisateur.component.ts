import { Component, OnInit } from '@angular/core';
import { UserService } from '../app.service';
import { Router } from '@angular/router';
import { MyService } from '../services/my.services';
import { Utilisateur } from './utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
  providers:[UserService]
})
export class UtilisateurComponent implements OnInit {

  constructor(public router:Router, public userservice: UserService, public myservice: MyService) { }
  userlist:any[];
  retoursaveuser:any;

  ngOnInit() {
    var verifuser = this.myservice.getValue();
    if (verifuser == 'inconnu'){
      this.router.navigate(['/login']);
    }

    this.userservice.getUsers().subscribe((data) => this.userlist = data);
  }

  model = new Utilisateur('','','','');

  valideruser():void{
    this.userservice.saveUser(this.model).subscribe((data) => this.retoursaveuser = data);
  }

}
