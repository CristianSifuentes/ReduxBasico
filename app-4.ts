import { incrementadorAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';
import { Store, createStore } from 'redux';
const store: Store = createStore(contadorReducer);

store.subscribe(() => {
   console.log('Subs: ', store.getState());
});


store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
