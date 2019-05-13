import { createStore, combineReducers } from 'redux';

import { CounterReducer } from './reducers/counter-reducer';
import { CounterActionTypes } from './reducers/counter-types';
import { TictactoeReducer } from './reducers/tictactoe-reducer';
import { TictactoeActionTypes } from './reducers/tictactoe-types';


const rootReducer = combineReducers({
  counter: CounterReducer,
  tictactoe: TictactoeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = CounterActionTypes | TictactoeActionTypes;
export default () => createStore<RootState, RootAction, {}, {}>(rootReducer);
