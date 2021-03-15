import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Login } from '../models/login';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  failsLogin = 0;

  usuarios: Login = new Login;

  constructor(public alertController: AlertController, public router: Router) { }

  async logForm(usuarios) {
    if(this.usuarios.email == null && this.usuarios.password == null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Ingrese datos en todos los campos.',
        buttons: ['OK']
      });

      await alert.present();
    }else{

      if (this.usuarios.email == 'Admin' && this.usuarios.password == '12345') {
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Acceso correcto',            
              message: 'Bienvenido administrador',
              buttons: ['OK']
            });
  
            this.usuarios.password = null;        
            this.usuarios.email = null;        
            // this.usuarios.typeUser = null;        
            await alert.present();
            this.router.navigate(['/tab1-admin'])
        }
      }
        if(this.usuarios.email == 'User' && this.usuarios.password == '12345'){
          {
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Acceso correcto',            
              message: 'Bienvenido pasajero',
              buttons: ['OK']
            });
  
            await alert.present();
          }
          this.usuarios.password = null;        
          this.usuarios.email = null;        
          // this.usuarios.typeUser = null;        
          this.router.navigate(['/menu-user'])
        }
  
  
        if(this.usuarios.email == 'Chofer' && this.usuarios.password == '12345'){
          {
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Acceso correcto',            
              message: 'Bienvenido chofer',
              buttons: ['OK']
            });
  
            await alert.present();
          }
          this.usuarios.password = null;        
          this.usuarios.email = null;        
          // this.usuarios.typeUser = null;   
          this.router.navigate(['/tab1'])     
        
  
        // {
        //   const alert = await this.alertController.create({
        //     cssClass: 'my-custom-class',
        //     header: 'Bienvenido: ' + this.usuarios.email,
        //     buttons: ['OK']
        //   });
        //   await alert.present();
        // }
  
        // Ruta hacia menu-admin
        
  
      } else {
  
        this.failsLogin++;
  
        console.log(this.failsLogin);
  
        {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: `Error (${this.failsLogin})`,          
            message: 'Datos erróneos',
            buttons: ['OK']
          });
  
          await alert.present();
        }
  
        if (this.failsLogin == 3) {
          {
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Estimado usuario',            
              message: 'Ha sido bloqueado por más de 3 intentos erroneos, regrese más tarde.',
              buttons: ['OK']
            });
  
            await alert.present();
          }
        }
  
      }
  
    }
  }

    


