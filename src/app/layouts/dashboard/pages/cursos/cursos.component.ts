import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { CursoModel } from './models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { FoursComponent } from './fours/fours.component';
import { Store } from '@ngrx/store';
import { selectPerfil } from '../../../../core/store/usuario/selectors';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: CursoModel[] = [];
  private unsubscribe$ = new Subject<void>();
  perfil?: string = ''

  constructor(private dataService: DataService, public dialog: MatDialog, private store:Store) {
    this.store.select(selectPerfil).subscribe({
      next: (p) => this.perfil = p
    })  
  }
  
  onCreate():void{
    this.dialog.open(FoursComponent).afterClosed().subscribe({
      next:(result)=> 
     { if(result){
      this.dataService.agregarCurso(result).subscribe({
        next: (cursos)=> (this.cursos = cursos),
      })
      }}
    });
  }


  onEdit(cursos: CursoModel){
    console.log("curso editado", cursos)
    this.dialog.open(FoursComponent,{
      data:cursos,
    }).afterClosed().subscribe(
      (result)=>{
         console.log("result", result)

        this.dataService.editarCurso({...result, id: cursos.id}).subscribe({
          next: (cursos)=>{ console.log(cursos); this.cursos = cursos},
        })
      }
    );

  }

onDelete(id: number){
  this.dataService.borrarCurso(id).subscribe({
    next: (cursos)=> (this.cursos = cursos)
  })
}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private obtenerCursos(): void {
    this.dataService.getCursos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (cursos) => this.cursos = cursos,
        error: (error) => console.error('Error al obtener cursos:', error)
      });
  }



}
