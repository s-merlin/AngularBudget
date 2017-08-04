import { Component, OnInit } from '@angular/core';
import { DepenseService } from '../app.service';
import { Router } from '@angular/router';
import { MyService } from '../services/my.services';
import { UserService } from '../app.service';
import { Depense } from './depense';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css'],
  providers:[DepenseService, UserService]
})
export class DepenseComponent implements OnInit {

  constructor(public router:Router, public depenseservice: DepenseService, public myservice: MyService, public userservice: UserService) { }
  depenselist:any[];
  postelist:any[];
  utilisateurlist:any[];
  retourquery:any;

  ngOnInit() {
    var verifuser = this.myservice.getValue();
    if (verifuser == 'inconnu'){
      this.router.navigate(['/login']);
    }

    this.depenseservice.getDepenses().subscribe((data) => this.depenselist = data);
    this.userservice.getUsers().subscribe((data) => this.utilisateurlist = data);
    this.depenseservice.getPostes().subscribe((data) => this.postelist = data);
  }

  model = new Depense('','','');

  validerdepense():void{
    if(this.model.personne==''){
      document.getElementById("error").innerHTML='Personne Obligatoire!';
    }
    else{
      this.depenseservice.saveDepense(this.model).subscribe((data) => {
        this.retourquery = data;
        document.getElementById("error").innerHTML='Depense enregistrée !';
        this.model = new Depense('','','');
      });
    }
  }

  deldepense(id):void{
    document.getElementById("dep"+id).remove();
    document.getElementById("error").innerHTML='Depense supprimée !';
    this.depenseservice.delDepense(id).subscribe((data) => this.retourquery = data);
  }

  recupdepense(id):void{
    this.depenseservice.getDepense(id).subscribe((data) => {
      this.model = data['0'];
      document.getElementById("update").style.display='block';
      document.getElementById("valider").style.display='none';
    });
  }

  updatedepense():void{
    this.depenseservice.updateDepense(this.model['iddepense'],this.model).subscribe((data) => {
      this.retourquery = data;
      this.model = new Depense('','','');
      document.getElementById("update").style.display='none';
      document.getElementById("valider").style.display='block';
      document.getElementById("error").innerHTML='Depense Mise à jour !';
    });
  }

}
