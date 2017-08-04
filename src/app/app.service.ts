import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, RequestOptionsArgs, Response} from '@angular/http';
import { User } from './login/user';
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
export class CurrentUser {
    token: string;
}

@Injectable()
export class OAuthHttp {
    constructor(protected http: Http, private currentUser: CurrentUser) { }
 
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        options.headers.append('Authorization', 'Bearer ' + this.currentUser.token);
        return this.http.get(url, options);
    }
}

@Injectable()
export class PassService{
    //passUrl = 'http://127.0.0.1:8080/api/log';
    passUrl = 'http://127.0.0.1:3000/user';
    user:any;
    constructor(public http: Http){};
    
    getPassword(email,pass)
    {
        return this.http.get(this.passUrl+'?email='+email+'&password='+pass)
       // return this.http.get('http://127.0.0.1:8080/api/log')
                        .map(res => res.json());
    }
}

@Injectable()
export class UserService{
    passUrl = 'http://127.0.0.1:3000/user';
    user:any;
    constructor(public http: Http){};
    
    getUsers()
    {
        return this.http.get(this.passUrl)
                        .map(res => res.json());
    }
    
    getUser(iduser)
    {
        return this.http.get(this.passUrl+'/'+iduser)
                        .map(res => res.json());
    }

    saveUser(model)
    {
        return this.http.post(this.passUrl+'/',model);
    }

    delUser(iduser)
    {
        return this.http.delete(this.passUrl+'/'+iduser);
    }

    updateUser(iduser,model){
        return this.http.put(this.passUrl+'/'+iduser,model);
    }
}

export class appService{
    getApp()
    {
        return "Hello world !";
    }
}