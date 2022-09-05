import { ROUND_GAME, START_GAME, START_ROUND_GAME, SCORE, PAUSE_GAME } from "@/consts"

const GameAction = {
  setStartGame(status: boolean) {
    return {
      type: START_GAME,
      start_game: status
    }
  },
  setStartRound(status: boolean) {
    return {
      type: START_ROUND_GAME,
      start_round: status
    }
  },
  setScore(score: number) {
    return {
      type: SCORE,
      score: score
    }
  },
  setRoundsGames(round: number) {
    return {
      type: ROUND_GAME,
      round_game: round
    }
  },
  setPauseGame(status: boolean) {
    return {
      type: PAUSE_GAME,
      pause_game: status
    }
  }
}

export default GameAction;