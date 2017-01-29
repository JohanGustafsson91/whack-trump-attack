/**
 * Communication with clients in game
 */

import { clients } from '../../stores'
import { CLIENT } from './actions'

export const sendGameUpdate = (game, clients) =>
	game.players.forEach(player =>
		clients.send(player.id, {
			type: CLIENT.GAME_UPDATE,
			game
		})
	)

export const sendGameCreated = (playerId, game) =>
	clients.send(playerId, {
		type: CLIENT.GAME_CREATED, game, playerId
	})

export const sendFindGameSuccess = (playerId, game) =>
	clients.send(playerId, {
		type: CLIENT.FIND_GAME_SUCCESS, game, playerId
	})

export const sendFindGameError = (playerId, message) =>
	clients.send(playerId, {
		type: CLIENT.FIND_GAME_ERROR,
		game: { gameInfo: { status: 'GAME_ERROR', message } }
	})

export const sendInviteVisited = (playerId, game) =>
	clients.send(playerId, {
		type: CLIENT.GAME_UPDATE, game
	})

export const sendJoinGameError = (playerId, message) =>
	clients.send(playerId, {
		type: CLIENT.FIND_GAME_ERROR,
		game: { gameInfo: { status: 'GAME_ERROR', message } }
	})
