import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CrearMiembroPage } from '../crear-miembro/crear-miembro';
import { MiembrosProvider } from '../../providers/miembros/miembros';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  miembros:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private mProvider:MiembrosProvider) {
    
  }

  crearMiembro(){
    this.navCtrl.push(CrearMiembroPage);
  }

  ionViewDidEnter(){
    this.mProvider.obtenerMiembros().then((respuesta)=>{
      this.miembros=respuesta;
    });
  }

}
