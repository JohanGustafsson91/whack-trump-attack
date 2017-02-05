import { handleActions } from 'redux-actions'
import { browserHistory } from 'react-router'
import { SERVER, CLIENT } from './actions'

export const initialState = {
	me: null,
	players: [],
	gameInfo: {},
	whacks: []
}

export default handleActions({
	[SERVER.CREATE_GAME]: state => ({
		...state, gameInfo: { status: 'INIT' }
	}),

	[CLIENT.GAME_CREATED]: (state, {
		game: {players, gameInfo, whacks}, playerId
	}) => {
		browserHistory.push(`/game/${gameInfo.gameId}`)
		return { players, gameInfo, whacks, me: playerId }
	},

	[CLIENT.FIND_GAME_SUCCESS]: (state, {
		game: {players, gameInfo, whacks}, playerId
	}) => ({
		players, gameInfo: {...gameInfo, status: 'JOIN_GAME'}, whacks, me: playerId
	}),

	[CLIENT.FIND_GAME_ERROR]: (state, {game}) => ({
		...state, ...game
	}),

	[CLIENT.GAME_UPDATE]: (state, {game}) => ({
		...state, ...game
	})
}, initialState)
