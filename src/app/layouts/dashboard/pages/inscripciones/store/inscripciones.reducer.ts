import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionesActions } from './inscripciones.actions';
import { inscripcion } from './model';

export const inscripcionesFeatureKey = 'inscripciones';

export interface Stateinscripcion {
  inscripcion: inscripcion[];
  loading: boolean;
  error: unknown;

}

export const initialState: Stateinscripcion = {
  inscripcion: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscripcionesActions.loadInscripcioness, state => ({ ...state, loading: true})),
  on(InscripcionesActions.loadInscripcionessSuccess, (state, action) => ({...state, loading: false , inscripcion: action.data})),
  on(InscripcionesActions.loadInscripcionessFailure, (state, action) => ({...state,loading: false, error: action.error})),
);

export const inscripcionesFeature = createFeature({
  name: inscripcionesFeatureKey,
  reducer,
});

