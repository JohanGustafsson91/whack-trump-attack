import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import createSocketIoMiddleware from 'redux-socket.io'
import rootReducer from './reducers'

const io = require('socket.io-client')

const socketIoMiddleware = (() => {
	const server = 'http://localhost:8080'
	const socket = io.connect(server)

	socket.on('connect', () => console.log('Connected!'))
	socket.on('disconnect', () => console.warn('Disconnected!'))

	return createSocketIoMiddleware(socket, 'server/')
})()

const configureStore = () => {
	const middlewares = [thunk, socketIoMiddleware]

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger())
	}

	return createStore(
		rootReducer,
		applyMiddleware(...middlewares)
	)
}

export default configureStore
