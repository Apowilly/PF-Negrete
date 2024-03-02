import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../user/models';
import { CursoModel } from '../../cursos/models';

interface inscriService {
 
          "id": string,
          "userId":string,
          "courseId": string,
          "user": User,
          "course": CursoModel
}

@Injectable({
  providedIn: 'root'
})
export class inscripcionesService {
constructor(private http: HttpClient){}

    getinscripciones(){
        return this.http.get<inscriService[]>('http://localhost:3000/inscriptions?_embed=user&_embed=course')
    }
    
  }
