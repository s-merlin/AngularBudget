import { Component } from '@angular/core';
import { Personne } from './personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personneForm.component.html'
})
export class PersonneFormComponent{
  model = new Personne(1,'PersonneA');
    toto():void{
    //var Passauth:any = this.passService.getPassword().subscribe((data) => this.password = data);
    alert(this.model.personnename);

    //alert(Passauth);
    //console.log('hi');
}

}
