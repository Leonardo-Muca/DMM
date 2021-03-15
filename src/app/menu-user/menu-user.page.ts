import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.page.html',
  styleUrls: ['./menu-user.page.scss'],
})
export class MenuUserPage implements OnInit {

  constructor(public alertController: AlertController, public router: Router) { }
 
  async pedir() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'CONFIRMAR VIAJE',
      message: '<strong>¿Estas seguro de pedir raí?</strong>',
      buttons: [
        {
          text: 'Camcelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Pedir',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  ngOnInit() {
  }

  cerrarSesion(){
    this.router.navigate(['/home']);
  }

  
}
