import { CursoModel } from "../../../cursos/models";
import { User } from "../../../user/models";

export interface inscripcion {
    id: string | number;
    userId : string | number;
    courseId : string | number;
    user? : User;
    course? : CursoModel;
}