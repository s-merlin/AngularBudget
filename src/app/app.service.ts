import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonneService{
    personneUrl = 'app/personne/personne.json';
    constructor(public http: Http){};

    getPersonne()
    {
        return this.http.get(this.personneUrl)
                        .map(res => res.json());
    }
}

@Injectable()
export class PassService{
    passUrl = 'app/password/password.json';
    constructor(public http: Http){};

    getPassword()
    {
        return this.http.get(this.passUrl)
                        .map(res => res.json());
    }
}

export class appService{
    getApp()
    {
        return "Hello world !";
    }
}