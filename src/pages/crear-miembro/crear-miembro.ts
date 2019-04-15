import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MiembrosProvider } from '../../providers/miembros/miembros';

@IonicPage()
@Component({
  selector: 'page-crear-miembro',
  templateUrl: 'crear-miembro.html',
})
export class CrearMiembroPage {

  miembro:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, private mProvider: MiembrosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearMiembroPage');
  }

  crear(){
    this.mProvider.crearMiembro(this.miembro).then(()=>{
      this.navCtrl.pop();
    });
  }

}
