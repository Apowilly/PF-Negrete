import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { inscripcion } from './model';

export const InscripcionesActions = createActionGroup({
  source: 'Inscripciones',
  events: {
    'Load Inscripcioness': emptyProps(),
    'Load Inscripcioness Success': props<{ data: inscripcion[] }>(),
    'Load Inscripcioness Failure': props<{ error: unknown }>(),
  }
});
