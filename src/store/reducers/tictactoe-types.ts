import { Action } from 'redux';


export enum TictactoeActionTypes {
  MAKE_MOVE = 'MAKE_MOVE',
  JUMP_TO = 'JUMP_TO',
}

interface MakeMoveAction extends Action {
  type: TictactoeActionTypes.MAKE_MOVE,
  payload: { i: number },
}

interface JumpToAction extends Action {
  type: TictactoeActionTypes.JUMP_TO,
  payload: { step: number },
}

export type TictactoeActions = MakeMoveAction | JumpToAction;
