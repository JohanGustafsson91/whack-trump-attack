import { Observable } from 'rxjs'
import { clients } from '../stores'
import * as GAME from '../modules/game/logic'
import { SERVER, INTERNAL, EPIC_END } from '../modules/game/actions'
import * as COM from '../modules/game/communication'

export const createGameEpic = action$ =>
	action$.ofType(SERVER.CREATE_GAME)
		.switchMap(({client, name}) => {
			COM.sendGameCreated(client.id, GAME.createGame(name, client))
			return Observable.of(EPIC_END)
		})
		.mapTo(EPIC_END)

export const findGameEpic = action$ =>
	action$.ofType(SERVER.FIND_GAME)
		.switchMap(({client, gameId}) =>
			GAME.findGame(gameId)
				.then(game => {
					COM.sendFindGameSuccess(client.id, game)
					COM.sendInviteVisited(game.gameInfo.creator, game)
				})
				.catch(err => COM.sendFindGameError(client.id, err))
		)
		.mapTo(EPIC_END)

export const joinGameEpic = action$ =>
	action$.ofType(SERVER.JOIN_GAME)
		.switchMap(({client, gameId, name}) =>
			GAME.joinGame(gameId, name, client)
				.then(game => {
					COM.sendGameUpdate(game, clients, true)
					GAME.countDownGame(gameId)
				})
				.catch(err => COM.sendJoinGameError(client.id, err))
		)
		.mapTo(EPIC_END)

export const countDownGameStartEpic = action$ =>
	action$.ofType(INTERNAL.COUNTDOWN_GAME)
		.switchMap(({gameId, time}) =>
			GAME.updateCountDownStartGame(gameId, time)
				.then(game => COM.sendGameUpdate(game, clients, true))
				.catch(err => console.error(err))
		)
		.mapTo(EPIC_END)

export const playGameEpic = action$ =>
	action$.ofType(INTERNAL.PLAY_GAME)
		.switchMap(({gameId}) => {
			GAME.playGame(gameId)
			return Observable.of(EPIC_END)
		})
		.mapTo(EPIC_END)

export const updateGameEpic = action$ =>
	action$.ofType(INTERNAL.UPDATE_GAME)
		.switchMap(({gameId, time}) =>
			GAME.updateGame(gameId, time)
				.then(game => COM.sendGameUpdate(game, clients))
				.catch(err => console.error(err))
		)
		.mapTo(EPIC_END)

export const playerMoveEpic = action$ =>
	action$.ofType(SERVER.PLAYER_MOVE)
		.switchMap(({gameId, move, client}) =>
			GAME.updateGameBoardAndScore(client.id, move, gameId)
				.then(game => COM.sendGameUpdate(game, clients))
				.catch(err => console.error(err))
		)
		.mapTo(EPIC_END)

export const gameOverEpic = action$ =>
	action$.ofType(INTERNAL.GAME_OVER)
		.switchMap(({gameId}) =>
			GAME.getGameOverResult(gameId)
				.then(game => COM.sendGameUpdate(game, clients))
				.catch(err => console.error(err))
		)
		.mapTo(EPIC_END)

export default (state = {}) => state
