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
  retourquery:any;

  ngOnInit() {
    var verifuser = this.myservice.getValue();
    if (verifuser == 'inconnu'){
      this.router.navigate(['/login']);
    }

    this.userservice.getUsers().subscribe((data) => this.userlist = data);
  }

  model = new Utilisateur('','','','');

  valideruser():void{
    if(this.model.login==''){
      document.getElementById("error").innerHTML='Login Obligatoire!';
    }
    else{
      this.userservice.saveUser(this.model).subscribe((data) => {
        this.retourquery = data;
        document.getElementById("error").innerHTML='Utilisateur enregistré !';
        this.model = new Utilisateur('','','','');
      });
    }
  }

  deluser(id):void{
    if(id == this.myservice.getValue().iduser){
      alert('Vous ne pouvez pas vous supprimer !');
    }
    else{
      document.getElementById("user"+id).remove();
      document.getElementById("error").innerHTML='Utilisateur supprimé !';
      this.userservice.delUser(id).subscribe((data) => this.retourquery = data);
    }
  }

  recupuser(id):void{
    this.userservice.getUser(id).subscribe((data) => {
      this.model = data['0'];
      document.getElementById("update").style.display='block';
      document.getElementById("valider").style.display='none';
    });
  }

  updateuser():void{
    this.userservice.updateUser(this.model['iduser'],this.model).subscribe((data) => {
      this.retourquery = data;
      this.model = new Utilisateur('','','','');
      document.getElementById("update").style.display='none';
      document.getElementById("valider").style.display='block';
      document.getElementById("error").innerHTML='Utilisateur Mis à jour !';
    });
  }

}
