import { CounterActions, CounterActionTypes } from './counter-types';


export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export function CounterReducer(
  state = initialState,
  action: CounterActions,
): CounterState {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + action.payload.change,
      }
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.change,
      }
  }
  return state;
}
