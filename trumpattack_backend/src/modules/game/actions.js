/**
 * Actions for Game module
 */

export const SERVER = {
	CREATE_GAME: 'server/CREATE_GAME',
	FIND_GAME: 'server/FIND_GAME',
	JOIN_GAME: 'server/JOIN_GAME',
	PLAYER_MOVE: 'server/PLAYER_MOVE'
}

export const CLIENT = {
	GAME_CREATED: 'client/GAME_CREATED',
	FIND_GAME_SUCCESS: 'client/FIND_GAME_SUCCESS',
	FIND_GAME_ERROR: 'client/FIND_GAME_ERROR',
	GAME_UPDATE: 'client/GAME_UPDATE',
	JOIN_GAME_ERROR: 'client/JOIN_GAME_ERROR'
}

export const INTERNAL = {
	COUNTDOWN_GAME: 'COUNTDOWN_GAME',
	PLAY_GAME: 'PLAY_GAME',
	UPDATE_GAME: 'UPDATE_GAME',
	GAME_OVER: 'GAME_OVER'
}

export const EPIC_END = { type: '' }
