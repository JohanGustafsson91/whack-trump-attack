import { handleActions } from 'redux-actions'
import * as R from 'ramda'
import { browserHistory } from 'react-router'

export const initialState = {
	me: null,
	players: [],
	gameInfo: {},
	whacks: []
}

// TODO add actions as constants

export default handleActions({
	'server/CREATE_GAME': state => ({
		...state, gameInfo: { status: 'INIT' }
	}),

	'client/GAME_CREATED': (state, {
		game: {players, gameInfo, whacks}, playerId
	}) => {
		browserHistory.push(`/game/${gameInfo.gameId}`)
		return { players, gameInfo, whacks, me: playerId }
	},

	'client/FIND_GAME_SUCCESS': (state, {
		game: {players, gameInfo, whacks}, playerId
	}) => ({
		players, gameInfo: {...gameInfo, status: 'JOIN_GAME'}, whacks, me: playerId
	}),

	'client/FIND_GAME_ERROR': (state, {game}) => ({
		...state, ...game
	}),

	'client/GAME_UPDATE': (state, {game}) => ({
		...state, ...game
	})
}, initialState)
