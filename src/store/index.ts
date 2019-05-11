import { createStore, combineReducers } from 'redux';

import { CounterReducer } from './reducers/counter-reducer';
import { TictactoeReducer } from './reducers/tictactoe-reducer';


const rootReducer = combineReducers({
  counter: CounterReducer,
  tictactoe: TictactoeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default () => createStore(rootReducer);
