import { TictactoeActions, TictactoeActionTypes } from './tictactoe-types';
import { calculateWinner } from '../../utility';


export interface TictactoeState {
  count: number;
  current: {
    squares: Array<string>,
  },
  history: Array<{
    squares: Array<string>,
  }>,
  stepNumber: number,
  winner: string | null,
  xIsNext: boolean,
}

const initialSquares: Array<string> = Array(9).fill(null);
const initialState: TictactoeState = {
  count: 0,
  current: { squares: initialSquares },
  history: [{
    squares: initialSquares,
  }],
  stepNumber: 0,
  winner: null,
  xIsNext: true,
};

export function TictactoeReducer(
  state = initialState,
  action: TictactoeActions,
): TictactoeState {
  switch (action.type) {
    case TictactoeActionTypes.MAKE_MOVE:
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      if (state.winner || current.squares[action.payload.i]) {
        return state;
      }
      const squares = current.squares.slice();
      squares[action.payload.i] = state.xIsNext ? 'X' : 'O';
      const winner = calculateWinner(squares);
      return {
        ...state,
        current: {
          squares,
        },
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        winner,
        xIsNext: !state.xIsNext,
      };

    case TictactoeActionTypes.JUMP_TO:
      return {
        ...state,
        current: state.history[action.payload.step],
        stepNumber: action.payload.step,
        winner: calculateWinner(state.history[action.payload.step].squares),
        xIsNext: (action.payload.step % 2) === 0,
      }

  }
  return state;
}
