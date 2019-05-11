import { TictactoeActions, TictactoeActionTypes } from "./tictactoe-types";


export const makeMove = (i: number): TictactoeActions => ({
  type: TictactoeActionTypes.MAKE_MOVE,
  payload: { i },
});

export const jumpTo = (step: number): TictactoeActions => ({
  type: TictactoeActionTypes.JUMP_TO,
  payload: { step },
});
