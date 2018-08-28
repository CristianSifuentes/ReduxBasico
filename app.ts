// Acción -> Que es lo que tiene que hace el reducer

interface Action {
    type: string;
    payload?: any;//parametros
}


// const incrementadorAction: Action = {
//        type: 'INCREMENTADOR'
// }

//reducer -> regresa un nuevo estado
//siempre regresan un estado
function reducer(state = 10, action: Action){

   if(action.type === 'INCREMENTADOR'){
       return state += 1;
   }

   return state;
}

// Usar el reducer


 const incrementadorAction: Action = {
        type: 'INCREMENTADOR'
 }


console.log(reducer(10, incrementadorAction));