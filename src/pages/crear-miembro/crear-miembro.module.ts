import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearMiembroPage } from './crear-miembro';

@NgModule({
  declarations: [
    CrearMiembroPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearMiembroPage),
  ],
})
export class CrearMiembroPageModule {}
