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
	GAME_UPDATE: 'client/GAME_UPDATE'
}

export const createGame = (name, price) =>
	({ type: SERVER.CREATE_GAME, name, price })

export const findGame = gameId =>
	({ type: SERVER.FIND_GAME, gameId })

export const joinGame = (gameId, name) =>
	({ type: SERVER.JOIN_GAME, gameId, name })

export const onSmash = (move, gameId) =>
	({ type: SERVER.PLAYER_MOVE, move, gameId})
