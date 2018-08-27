# ReduxBasico
Ejemplo de para entender los conceptos de redux

# Conceptos

¿Que es Redux?

patrón para el manejo de la información
permite saber cual es el estado de la aplicación.

* toda la data de la app se encuentra en una estructura definida previamente
* almacenada en un único lugar llamado store
* el store ajamas se modifica de forma directa
* interacciones disparan acciones que describen que sucedió
* Valor actual de la aplicación de llama State
* un nuevo estado es creado, en base a la combinación del viejo estado y a la acción 
por una función llamada reducer.


Estado actual (state)
la acción y el viejo estado pasan por un reducer y generan el nuevo estado

¿Para qué sirve?
Que son las:
Acciones 
- única fuente de información que se envía por interacciones de usuario o programa.
- Deben ser simples
- tiene 2 propiedades
  * type - que es lo que se quiere hacer
  * payload - (opcional)

Reducers
 - Función que recibe 2 argumentos (oldstate, action)
 - siempre retorna un estado

State
- es de solo lectura, no se muta de forma directa
-
Store

- contiene est estado actual de la aplicación
- permite la lectura del estado (getState())
- permite crear un nuevo estado (dispatch(action))
- permite notificar cambios de estado vía (subscribe())
