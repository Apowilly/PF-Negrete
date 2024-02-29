import { featureNameUsuario, usuarioReducer } from './usuario/reducers';


export const appReducer = {
     [featureNameUsuario]: usuarioReducer,
}