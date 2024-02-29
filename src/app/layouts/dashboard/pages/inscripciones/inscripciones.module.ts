import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { inscripcionesRoutingModule } from './inscripciones-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    inscripcionesRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class InscripcionesModule { }
