import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  usuarios: any;
  url = 'http://localhost:3000/api/libros'; 
  
  getUsuarios(){
    this.http.get(`${this.url}`).subscribe((data:any) => {
      this.usuarios = data;
      return data;
    },
    err => {
      console.log(err);
    });    
  }


}
