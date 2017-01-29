import { io } from './server'

/**
* TODO clear old games
*/
export const games = new Map()

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
			return false
		}

		return true
	}
}
