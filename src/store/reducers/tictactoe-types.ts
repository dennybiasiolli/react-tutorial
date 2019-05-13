import { Action } from 'redux';


export enum TictactoeActions {
  MAKE_MOVE = 'MAKE_MOVE',
  JUMP_TO = 'JUMP_TO',
}

interface MakeMoveAction extends Action {
  type: typeof TictactoeActions.MAKE_MOVE,
  payload: { i: number },
}

interface JumpToAction extends Action {
  type: typeof TictactoeActions.JUMP_TO,
  payload: { step: number },
}

export type TictactoeActionTypes = MakeMoveAction | JumpToAction;
