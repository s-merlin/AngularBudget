import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MyService} from '../services/my.services';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

  constructor(public router:Router, public myservice: MyService) { }

  ngOnInit() {
     this.myservice.setValue(undefined);
     this.router.navigate(['/login']);
  }

}
