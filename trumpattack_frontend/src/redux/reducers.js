import { combineReducers } from 'redux'
import game from './modules/game/reducer'

const rootReducer = combineReducers({
	game
})

export default rootReducer
