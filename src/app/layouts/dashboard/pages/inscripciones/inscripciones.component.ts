

// tabla-inscripciones.component.ts
 
import { Component, OnInit } from '@angular/core';
import { inscripcionesService } from './store/inscripciones.service';
import { Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { selectInscripciones } from './store/inscripciones.selectors';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit {

  inscripcion$: any;
  inscripcion: any;

  displayedColumns: string[] = ['id', 'nombreCurso', 'nombreAlumno'];
  dataSource:{ id: string | number ; nombreCurso?: string; nombreAlumno?: string; }[] = [];

  constructor( private inscripcionesService: inscripcionesService, private store : Store) {
 /*    this.inscripcion$ = this.inscripcionesService.getinscripciones();
 */
    this.store.dispatch(InscripcionesActions.loadInscripcioness())


/*     this.inscripcionesService.getinscripciones().subscribe({
      next: (i) => {
        this.dataSource = i.map( (m) =>  { 
          console.log({m})
          return {
            id: m.id, nombreCurso: m.course.asignatura, nombreAlumno: m.user.nombre+" "+m.user.apellido
        }
      } )
      }

    })   */  

    this.store.select(selectInscripciones).subscribe({
      next: (v) =>{ 
        
        this.inscripcion = v
        this.dataSource = v.map( (m) =>  { 
          console.log({m})
            return {
              id: m.id, nombreCurso: m.course?.asignatura , nombreAlumno: m.user?.nombre+" "+m.user?.apellido
            }
         })
        }
    });

    console.log("log",this.inscripcion, this.dataSource)

   }

  ngOnInit(): void {
  }

}
