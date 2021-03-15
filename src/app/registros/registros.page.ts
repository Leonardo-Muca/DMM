import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Login } from '../models/login';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  
  arrayAdmin: any;  
  arrayChof: any;  
  arrayUser: any;    
  model: Login = new Login;

  admin = 0;
  chof = 0;
  user = 0;

  constructor(public alertController: AlertController, public router: Router, public srv: ServiceService) {
    this.arrayAdmin = []
    this.arrayChof = []
    this.arrayUser = []
    this.srv.usuarios = this.admin + this.chof + this.user;  

   }

  ngOnInit() {   
    console.log(this.srv.usuarios); 
  }

  async guardar(model){
    let usuarios = {
      "email": this.model.email,
      "password": this.model.password,
      "type": this.model.typeUser      
    }; 
    console.log(this.model.email);
    

    if(this.model.email != undefined && this.model.email != '', this.model.password != undefined && this.model.password != '', this.model.typeUser != undefined && this.model.typeUser != ''){

      if(this.model.typeUser === 'admin'){
        this.arrayAdmin.push(usuarios);    
        this.admin ++;
        this.model.email = null;
        this.model.password = null;
        this.model.typeUser = null;
        console.log(this.arrayAdmin, this.admin);      
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el Administrador',
          buttons: ['OK']
        });
        await alert.present();
      }
  
      if(this.model.typeUser === 'chof'){
        this.arrayChof.push(usuarios);    
        this.chof ++;
        this.model.email = null;
        this.model.password = null;
        this.model.typeUser = null;
        console.log(this.arrayChof, this.chof);
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el Chofer',
          buttons: ['OK']
        });
        await alert.present();
      }
  
      if(this.model.typeUser === 'user'){
        this.arrayUser.push(usuarios);    
        this.user ++;
        this.model.email = null;
        this.model.password = null;
        this.model.typeUser = null;
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el Pasajero',
          buttons: ['OK']
        });
        await alert.present();
        console.log(this.arrayUser, this.user);
      }
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Mensaje',            
        message: 'Faltan datos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  regresar(){
    this.router.navigate(['/tab1-admin']);  
  }

}
