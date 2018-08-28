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
//Todo lo que el reducer realice debe ser pura
function reducer(state = 10, action: Action){

  switch(action.type){
      case 'INCREMENTADOR':
         return state += 1;
      case 'DECREMENTAR':
         return state -= 1;
      case 'MULTIPLICAR':
         return state * action.payload
      case 'DIVIDIR':
         return state / action.payload
      default:
        return state;
  }


   return state;
}


 const incrementadorAction: Action = {
        type: 'INCREMENTADOR'
 }

 const decrementadorAction: Action = {
       type: 'DECREMENTAR'
 }

 const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 7
}


const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 7
}


console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));
