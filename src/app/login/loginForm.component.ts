import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { User } from './user';
import {PassService} from '../app.service';
import {MyService} from '../services/my.services';
//import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './loginForm.component.html',
  providers: [PassService/*,HeaderComponent*/]
})

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
  styleUrls: ['../header/header.component.css']
})

export class LoginFormComponent{
  retour:any[];
  useraffiche:any;

  constructor(public router:Router, public passservice: PassService,
              public myservice: MyService/*,public headercomponent:HeaderComponent*/){ }

  ngOnInit() {
    //Verif du user
    var verifuser = this.myservice.getValue();
    if (verifuser != 'inconnu'){
      this.useraffiche = verifuser;
      this.router.navigate(['/accueil']);
    }
    else{
    }
  }

  model = new Login('aaa','aaa');

  authentification():void{
      let email = this.model.email;
      let password = this.model.password;

      //Appel au service de connexion base de donnée pour verifier le login mot de passe
      this.passservice.getPassword(email,password).subscribe((data) =>{ 
        this.retour = data;
        if(this.retour != undefined){
          if(this.retour[0] != undefined){
            document.getElementById("error").innerHTML = '';
            var user = new User(this.retour[0].iduser,
                                this.retour[0].login,
                                this.retour[0].email,
                                this.retour[0].password,
                                this.retour[0].role);
            this.myservice.setValue(user);
            /*this.headercomponent.ngDoCheck();
            this.headercomponent.useraffiche = user;
            this.headercomponent.page = 'nope';
            this.headercomponent.rdm('accueil');*/
            /*this.useraffiche = "heho";*/
            this.router.navigate(['/accueil']);
          }
        }
        //si ko message d'erreur et on le laisse ici
        else{
          let err = document.getElementById("error");
          err.innerHTML = 'Utilisateur inconnu !';
        }
      });
  }

}
