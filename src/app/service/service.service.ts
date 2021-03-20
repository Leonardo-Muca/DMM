import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  usuarios: any;
  urlUser = 'http://localhost:3000/api/usuarios'; 
  urlLogin = 'http://localhost:3000/api/login'
  urlBase = 'http://localhost:3000/api/choferCarros/';
  choferCarros: any;

  constructor(public http: HttpClient) { 
    this.choferCarros = [];
  }

  
  
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

  obtenerCarros(){
    this.http.get(this.urlBase).subscribe(
      res => {
        this.choferCarros = res;
        console.log('Los carros en la base de datos son:', res);
      }, err => {
        console.log(err);
      }
    )
  }

  altaCarro(coche){
    return this.http.post(this.urlBase, coche).toPromise();
  }

}
