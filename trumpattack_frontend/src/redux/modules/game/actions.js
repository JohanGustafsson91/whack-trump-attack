const CREATE_GAME = 'server/CREATE_GAME'
const FIND_GAME = 'server/FIND_GAME'
const JOIN_GAME = 'server/JOIN_GAME'
const PLAYER_MOVE = 'server/PLAYER_MOVE'

export const createGame = (name, price) => ({ type: CREATE_GAME, name, price })
export const findGame = gameId => ({ type: FIND_GAME, gameId })
export const joinGame = (gameId, name) => ({ type: JOIN_GAME, gameId, name })
export const onSmash = (move, gameId) => ({ type: PLAYER_MOVE, move, gameId})
