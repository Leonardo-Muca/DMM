import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Reportes } from '../models/login';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  constructor(public router: Router, public alertController: AlertController) { 
    this.arrayReporte = [];
  }

  arrayReporte: any;    
  reporte: Reportes = new Reportes;
    
  rep = 0;

  ngOnInit() {
  }


  async guardar(form){

    let reportes = {
      "origen": this.reporte.Origen,
      "destino": this.reporte.Destino,
      "duracion": this.reporte.Duracion,
      "fecha": this.reporte.Fecha      
    };     
    

    if(this.reporte.Origen != undefined && this.reporte.Origen != '', this.reporte.Destino != undefined && this.reporte.Destino != '', this.reporte.Duracion != undefined && this.reporte.Duracion != '', this.reporte.Fecha != undefined){
      
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Regsitro',            
          message: 'Se registró el reporte',
          buttons: ['OK']
        });
        await alert.present();
                
        this.reporte.Origen = null;
        this.reporte.Destino = null;
        this.reporte.Duracion = null;
        this.reporte.Fecha = null;

        this.arrayReporte.push(reportes);    
        this.rep ++;

        console.log(this.arrayReporte);

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
