import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState, featureNameUsuario } from "../reducers";


export const selectUsuarioState = createFeatureSelector<UserState | null>(featureNameUsuario);

export const selectUsuario = createSelector(selectUsuarioState, (state) => state);

export const selectPerfil = createSelector(selectUsuarioState, (state) => state?.user?.perfil);