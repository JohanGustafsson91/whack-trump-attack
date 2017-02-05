import { generate } from 'shortid'
import { Observable } from 'rxjs'
import { games } from '../../stores'
import { store } from '../../server'
import { getGameBoard, updateBoard, updateScore, getResult } from './results'
import { INTERNAL } from './actions'

export const createGame = (name, creator) => {
	const gameInfo = {
		players: [{ name, id: creator.id, score: 0 }],
		gameInfo: {
			gameId: generate(),
			status: 'WAITING',
			inviteSeen: false,
			time: 3,
			creator: creator.id,
			message: null
		},
		whacks: []
	}

	return games.addGame(gameInfo.gameInfo.gameId, gameInfo)
}

export const findGame = gameId => new Promise((resolve, reject) => {
	const game = games.getGame(gameId, reject, false)
	game.gameInfo.inviteSeen = true

	resolve(game)
})

export const joinGame = (gameId, name, newPlayer) => new Promise((resolve, reject) => {
	const game = games.getGame(gameId, reject, false)
	game.players.push({	name, id: newPlayer.id, score: 0 })
	game.gameInfo.status = 'COUNTDOWN'

	resolve(game)
})

export const countDownGame = gameId =>
	Observable.interval(1000)
		.take(3)
		.startWith(3)
		.scan(acc => acc - 1)
		.subscribe(
			time => store.dispatch({ type: INTERNAL.COUNTDOWN_GAME, gameId, time }),
			err => console.warn('err', err),
			() => store.dispatch({ type: INTERNAL.PLAY_GAME, gameId })
		)

export const updateCountDownStartGame = (gameId, time) => new Promise((resolve, reject) => {
	const game = games.getGame(gameId, reject, true)
	game.gameInfo.time = time

	resolve(game)
})

export const playGame = gameId => {
	const game = games.getGame(gameId, () => {}, true)

	game.whacks = getGameBoard(3)
	game.gameInfo.status = 'PLAYING'

	return Observable.interval(1000)
		.take(60)
		.startWith(60)
		.scan(acc => acc - 1)
		.subscribe(
			time => store.dispatch({ type: INTERNAL.UPDATE_GAME, gameId, time }),
			err => console.warn('err', err),
			() => store.dispatch({ type: INTERNAL.GAME_OVER, gameId })
		)
}

export const updateGameTime = (gameId, time) => new Promise((resolve, reject) => {
	const game = games.getGame(gameId, reject, true)
	game.gameInfo.time = time

	resolve(game)
})

export const updateGameBoardAndScore = (playerId, move, gameId) => new Promise((resolve, reject) => {
	const game = games.getGame(gameId, reject, true)
	game.whacks = updateBoard(game.whacks, move)
	game.players = updateScore(game.players, playerId)

	resolve(game)
})

export const getGameOverResult = gameId => new Promise((resolve, reject) => {
	const game = games.getGame(gameId, reject, true)
	const gameResult = getResult(game.players)
	game.players = gameResult.players
	game.gameInfo.winner = gameResult.winner
	game.gameInfo.status = 'GAME_OVER'

	games.removeGame(game.gameInfo.gameId)

	resolve(game)
})
