import { createStore, combineReducers } from 'redux';

import { CounterReducer } from './reducers/counter-reducer';


const rootReducer = combineReducers({
  counter: CounterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default () => createStore(rootReducer);
