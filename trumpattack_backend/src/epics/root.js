import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import game, {
	createGameEpic,
	joinGameEpic,
	findGameEpic,
	countDownGameStartEpic,
	playGameEpic,
	updateGameEpic,
	playerMoveEpic,
	gameOverEpic
} from './game'

export const rootEpic = combineEpics(
	createGameEpic,
	joinGameEpic,
	findGameEpic,
	countDownGameStartEpic,
	playGameEpic,
	updateGameEpic,
	playerMoveEpic,
	gameOverEpic
)

export const rootReducer = combineReducers({game})
