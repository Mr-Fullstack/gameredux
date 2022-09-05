import { ROUND_GAME, START_GAME, START_ROUND_GAME, PAUSE_GAME, SCORE } from "@/consts"

const INITIAL_STATE = {
  start_game: false,
  pause_game: false
}

export function game(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case START_GAME:
      return { ...state, start_game: action.start_game }
    case START_ROUND_GAME:
      return { ...state, start_round: action.start_round }
    case SCORE:
      return { ...state, score: action.score }
    case ROUND_GAME:
      return { ...state, round_game: action.round_game }
    case PAUSE_GAME:
      return { ...state, pause_game: action.pause_game }
    default:
      return state
  }
}