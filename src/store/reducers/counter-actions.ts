import { CounterActions, CounterActionTypes } from "./counter-types";


export const increment = (change: number): CounterActionTypes => ({
  type: CounterActions.INCREMENT,
  payload: { change },
});

export const decrement = (change: number): CounterActionTypes => ({
  type: CounterActions.DECREMENT,
  payload: { change },
});
