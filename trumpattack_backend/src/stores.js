import { io } from './server'

// export const games = new Map()

export const clients = {
	sockets: new Map(),

	add(socketId, socket) {
		this.sockets.set(socketId, socket)
	},

	send(socketId, data) {
		const client = this.sockets.get(socketId)

		if (client) {
			client.emit('action', data)
		}
	},

	isActive(socketId) {
		const client = this.sockets.get(socketId)

		if (!client) {
			return false
		}

		if (io.sockets.sockets[client.id] === undefined) {
			// TODO remove from map
			return false
		}

		return true
	}
}

export const games = {
	games: new Map(),

	addGame(gameId, gameInfo) {
		this.games.set(gameId, gameInfo)
		return this.games.get(gameId)
	},

	removeGame(gameId) {
		this.games.delete(gameId)
	},

	getGame(gameId, rejectWithError, inGame) {
		const game = this.games.get(gameId)

		if (!game) {
			return rejectWithError('The game doesnt exists')
		}

		if (!clients.isActive(game.gameInfo.creator)) {
			this.removeGame(gameId)
			return rejectWithError('The challenger cant be found')
		}

		if (!inGame && game.players.length === 2) {
			return rejectWithError('There are already two players in the game')
		}

		return game
	}
}
