import { CounterActions, CounterActionTypes } from './counter-types';


export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export function CounterReducer(
  state = initialState,
  action: CounterActionTypes,
): CounterState {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload.change,
      }
    case CounterActions.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.change,
      }
  }
  return state;
}
