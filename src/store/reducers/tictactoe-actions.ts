import { TictactoeActions, TictactoeActionTypes } from "./tictactoe-types";


export const makeMove = (i: number): TictactoeActionTypes => ({
  type: TictactoeActions.MAKE_MOVE,
  payload: { i },
});

export const jumpTo = (step: number): TictactoeActionTypes => ({
  type: TictactoeActions.JUMP_TO,
  payload: { step },
});
