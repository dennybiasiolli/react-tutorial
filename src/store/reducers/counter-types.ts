import { Action } from 'redux';


export enum CounterActions {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

interface IncrementAction extends Action {
  type: CounterActions.INCREMENT,
  payload: { change: number },
}

interface DecrementAction extends Action {
  type: CounterActions.DECREMENT,
  payload: { change: number },
}

export type CounterActionTypes = IncrementAction | DecrementAction;
