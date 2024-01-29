import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionComponent } from './inscripcion.component';



@NgModule({
  declarations: [
    InscripcionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[InscripcionModule]
})
export class InscripcionModule { }
