import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the MiembrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MiembrosProvider {

  constructor(public storage: Storage) {
  }

  obtenerMiembros(){
    return this.storage.get('miembros').then(miembros=>{
      if(!miembros) miembros = [];
      return miembros;
    });
  }

  crearMiembro(miembro){
    return this.obtenerMiembros().then(miembros=>{
      miembros.push(miembro);
      return this.storage.set('miembros', miembros);
    })
  }

}
