import { Action } from 'redux';


export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

interface IncrementAction extends Action {
  type: CounterActionTypes.INCREMENT,
  payload: { change: number },
}

interface DecrementAction extends Action {
  type: CounterActionTypes.DECREMENT,
  payload: { change: number },
}

export type CounterActions = IncrementAction | DecrementAction;
