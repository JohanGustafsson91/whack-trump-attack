import { generate } from 'shortid'
import { Observable } from 'rxjs'
import { games, clients } from '../../stores'
import { store } from '../../server'
import { getWhacks, updateWhacks, getResult } from './results'
import { INTERNAL } from './actions'

/**
 * TODO
 * Add constants statuses
 * Add constants errors
 * Add selectors
 */

export const createGame = (name, creator) => {
	const gameInfo = {
		players: [
			{ name, id: creator.id, score: 0 }
		],
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

	games.set(gameInfo.gameInfo.gameId, gameInfo)

	return games.get(gameInfo.gameInfo.gameId)
}

export const findGame = gameId => new Promise((resolve, reject) => {
	const game = games.get(gameId)

	if (!game) {
		reject('The game doesnt exists')
	}

	if (!clients.isActive(game.gameInfo.creator)) {
		reject('The challenger cant be found')
	}

	game.gameInfo.inviteSeen = true

	resolve(game)
})

export const joinGame = (gameId, name, newPlayer) => new Promise((resolve, reject) => {
	const game = games.get(gameId)

	if (!game) {
		reject('The game doesnt exists')
	}

	if (!clients.isActive(game.gameInfo.creator)) {
		reject('The challenger cant be found')
	}

	if (game.players.length === 2) {
		reject('There are already two players in the game')
	}

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
	const game = games.get(gameId)

	if (!game) {
		reject('Some error happened with the game...')
	}

	if (time >= 0) {
		// Update loading time
		game.gameInfo.status = 'COUNTDOWN'
		game.gameInfo.time = time
	}

	resolve(game)
})

export const playGame = gameId => {
	const game = games.get(gameId)

	game.whacks = getWhacks()
	game.gameInfo.status = 'PLAYING'

	return Observable.interval(1000)
		.take(5)
		.startWith(5)
		.scan(acc => acc - 1)
		.subscribe(
			time => store.dispatch({ type: INTERNAL.UPDATE_GAME, gameId, time }),
			err => console.warn('err', err),
			() => store.dispatch({ type: INTERNAL.GAME_OVER, gameId })
		)
}

export const updateGame = (gameId, time) => new Promise((resolve, reject) => {
	const game = games.get(gameId)

	if (!game) {
		reject('Some error happened with the game...')
	}

	if (time >= 0) {
		// Update loading time
		game.gameInfo.status = 'PLAYING'
		game.gameInfo.time = time
	}

	resolve(game)
})

export const updateGameBoardAndScore = (playerId, move, gameId) => new Promise((resolve, reject) => {
	const game = games.get(gameId)

	if (!game) {
		reject('Some error happened with the game')
	}

	// Remove whack from board
	game.whacks = updateWhacks(game.whacks, move)

	// Find player and add score
	game.players = game.players.map(player => ({
		...player,
		score: player.id === playerId ? player.score + 1 : player.score
	}))

	resolve(game)
})

export const getGameOverResult = gameId => new Promise((resolve, reject) => {
	const game = games.get(gameId)

	if (!game) {
		reject('Some error happened with the game...')
	}

	// Calculate winner of round
	game.players = getResult(game.players)
	game.gameInfo.status = 'GAME_OVER'

	// TODO Remove game...

	resolve(game)
})
