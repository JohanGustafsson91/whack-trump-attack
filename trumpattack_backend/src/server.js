import { createWriteStream } from 'fs'
import { Server } from 'http'
import express from 'express'
import envs from 'envs'
import dotenv from 'dotenv'
import morgan from 'morgan'
import socket from 'socket.io'
import createStore from './configure-store'
import { clients } from './stores'

export const store = createStore()
const app = express()

// Load environment from .env file
dotenv.load()

// Set production settings here
app.set('environment', envs('NODE_ENV', 'production'))
app.set('port', envs('PORT', '8080'))

// Log requests to file
app.use(morgan('common', {
	stream: createWriteStream(__dirname + '/access.log', {
		flags: 'a'
	})
}))

// Log to console in development mode
if (app.get('environment') === 'development') {
	app.use(morgan('dev'))
}

const server = Server(app)
export const io = socket(server)

io.on('connection', client => {
	console.log(`Client connected`)
	clients.add(client.id, client)

	client.on('action', action => {
		console.log(JSON.stringify(action))
		store.dispatch({ ...action, client })
	})
})

server.listen(app.get('port'), () => {
	console.log(`Serving at http://localhost:${app.get('port')}`)
})
