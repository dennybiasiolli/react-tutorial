import { CounterActions, CounterActionTypes } from "./counter-types";


export const increment = (change: number): CounterActions => {
  return {
    type: CounterActionTypes.INCREMENT,
    payload: { change },
  }
}

export function decrement(change: number): CounterActions {
  return {
    type: CounterActionTypes.DECREMENT,
    payload: { change },
  }
}
