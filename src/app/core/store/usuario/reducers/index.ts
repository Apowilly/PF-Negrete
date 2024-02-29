import { createReducer, on } from "@ngrx/store";
import { usuarioActions } from "../actions";
import { User } from "../../../../layouts/dashboard/pages/user/models";

export const featureNameUsuario = 'usuario'

export interface UserState{
    user: User | null;
}

export const inicialState = {
 user: null
}

export const usuarioReducer = createReducer<UserState>(
    inicialState,
    on(usuarioActions.vaciar, (state) => inicialState),
    on(usuarioActions.usuario, (state, action) => {
            return {
                ...state,
                user: action
            }
    })
)