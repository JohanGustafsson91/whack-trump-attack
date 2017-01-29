import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import { rootEpic, rootReducer } from './epics/root'

const epicMiddleware = createEpicMiddleware(rootEpic)

export default function configureStore() {
	const store = createStore(
		rootReducer,
		applyMiddleware(epicMiddleware, thunk)
	)

	return store
}
