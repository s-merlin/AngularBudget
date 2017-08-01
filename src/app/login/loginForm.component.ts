import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './loginForm.component.html'
})
export class LoginFormComponent{
  model = new Login('mon email','Password');

    authentification():void{
        let email = this.model.email;
        let password = this.model.password;
        //alert(email+' '+password);
        //Appel au service de connexion base de donnée pour verifier le login mot de passe

        //si ok le log et l'envoie sur accueil

        //si ko message d'erreur et on le laisse ici
}

}
