import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { inscripcionesRoutingModule } from './inscripciones-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { inscripcionesFeature } from './store/inscripciones.reducer';
import { InscripcionesEffects } from './store/inscripciones.effects';


@NgModule({
  declarations: [
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    inscripcionesRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
   MatTableModule ,
   StoreModule.forFeature(inscripcionesFeature),
   EffectsModule.forFeature([InscripcionesEffects]),
  ]
})
export class InscripcionesModule { }


