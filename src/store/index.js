import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
   reducer : {counter : counterReducer, auth: authReducer},
   //reducer: counterSlice.reducer si tenemos un solo reducer
});


export default store;













//logica vieja cuando usas solo Redux
// const initialState = {counter:0, showCounter: true};
// const counterReducer = (state = initialState, action ) => {

//     if ( action.type ==='increment' ) {
//         return {counter: state.counter+ 1, showCounter: state.showCounter};

//     }
//     if ( action.type ==='decrement' ) {
//         return {counter: state.counter- 1, showCounter: state.showCounter}
//     }
//     if ( action.type ==='increase' ) {
//         return {counter: state.counter +action.amount , showCounter: state.showCounter}
//     }

//     if ( action.type === 'toogle'){
//         return {counter: state.counter, showCounter: !state.showCounter}
//     }

//     return state;
// };

// const store = createStore(counterReducer);

// export default store;
