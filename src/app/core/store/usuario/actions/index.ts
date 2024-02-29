import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../../../../layouts/dashboard/pages/user/models";

export const usuarioActions = createActionGroup({
 source: "usuario",
 events:{
    'vaciar': emptyProps(),
    'usuario': props<User>()
 }
})