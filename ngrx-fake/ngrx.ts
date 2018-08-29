import { Action } from './ngrx';
// Acción -> Que es lo que tiene que hace el reducer

export interface Action {
    type: string;
    payload?: any;//parametros
}


export interface Reducer<T> {
   (state: T, action: Action): T
}