import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { MiembrosProvider } from '../../providers/miembros/miembros';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  miembroElegido:any;
  constructor(public navCtrl: NavController, public mProvider: MiembrosProvider, public loadingCtrl: LoadingController) {

  }

  sortear(){
    let loader = this.loadingCtrl.create({
      content: "Sorteando...",
      duration: 3000
    });
    loader.onDidDismiss(()=>{
      this.mProvider.obtenerMiembros().then(miembros=>{
        let random = Math.floor(Math.random() * miembros.length);
         this.miembroElegido = miembros[random];
        
      });
    });
    loader.present();
  
  }

}
