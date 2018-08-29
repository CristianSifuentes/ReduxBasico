
import { Action } from '../ngrx-fake/ngrx';

export const incrementadorAction: Action = {
    type: 'INCREMENTADOR'
}

export const decrementadorAction: Action = {
   type: 'DECREMENTAR'
}

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 7
}


export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 7
}

export const resetAction: Action = {
    type: 'RESET'
}


