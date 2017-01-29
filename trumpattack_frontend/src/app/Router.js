import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Start from '../screens/start/Start'
import Game from '../screens/game/Game'
import NotFound from '../screens/error/NotFound'
import App from './App'

export const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Start} />
			<Route path="start" component={Start} />
			<Route path="game" component={Game} />
			<Route path="game/:gameId" component={Game} />
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
)
