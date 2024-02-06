import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursoModel } from '../models';

@Component({
  selector: 'app-fours',
  templateUrl: './fours.component.html',
  styleUrl: './fours.component.scss'
})
export class FoursComponent {
cursosForm: FormGroup;

constructor(private fb:FormBuilder, private dialogRef: MatDialogRef <FoursComponent>, 
  @Inject(MAT_DIALOG_DATA) private editingcursos?:CursoModel, 
  ){

    console.log(this.editingcursos)
  this.cursosForm = this.fb.group({
    asignatura:this.fb.control('', Validators.required),
    profesor:this.fb.control('', Validators.required),
    horarios:this.fb.control('', Validators.required),
    cantidadAlumnos:this.fb.control('', Validators.required),

  });

  if(this.editingcursos){
    this.cursosForm.patchValue(this.editingcursos);
  }
}
onSave(): void{
  if (this.cursosForm.valid) {
    this.dialogRef.close(this.cursosForm.value);
  }

}

}
