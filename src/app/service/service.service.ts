import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  usuarios: any;
  urlUser = 'http://localhost:3000/api/usuarios'; 
  urlLogin = 'http://localhost:3000/api/login'
 
  
  getUsuarios(){
    this.http.get(`${this.urlUser}`).subscribe((data:any) => {
      this.usuarios = data;
      return data;
    },
    err => {
      console.log(err);
    });    
  }

  altaUser(usuario){
    return this.http.post(this.urlUser, usuario).toPromise();

  }

  login(usuario){
    return this.http.post(this.urlLogin,usuario).toPromise();
  }

}
