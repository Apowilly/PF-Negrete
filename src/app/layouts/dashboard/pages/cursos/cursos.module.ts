import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog';
import { FoursComponent } from './fours/fours.component'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule, } from '@angular/material/core';
import { CursosDetalleComponent } from './components/cursos-detalle/cursos-detalle.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CursosComponent,
    FoursComponent,
    CursosDetalleComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatIconModule,MatListModule,MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule,RouterModule,
  ],
  exports:[CursosComponent]
})
export class CursosModule {}
