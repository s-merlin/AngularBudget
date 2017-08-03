import { Component, OnInit } from '@angular/core';
import { PassService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PassService]
})
export class LoginComponent implements OnInit {
  password:any[]

  constructor(public passService: PassService) { }

  ngOnInit() {
    
  }

  toto():void{
    /*var Passauth:any = this.passService.getPassword().subscribe((data) => this.password = data);
    alert(Passauth.forEach(element => {
      return element.PassLogin;
    }));

      alert(Passauth[0]);
      */
    //alert(Passauth);
    //console.log('hi');
}
  


}