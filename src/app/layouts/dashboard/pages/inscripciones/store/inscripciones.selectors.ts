import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from './inscripciones.reducer';

export const selectInscripcionesState = createFeatureSelector<fromInscripciones.Stateinscripcion>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectInscripciones = createSelector(
  selectInscripcionesState, (state)=> state.inscripcion
);

export const selectInscripcionesLoding = createSelector(
  selectInscripcionesState, (state)=> state.loading
);

