import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import StartPage from '../components/container/StartPage'
import GamePage from '../components/container/GamePage'
import NotFoundPage from '../components/presentation/NotFoundPage'
import App from './App'

export const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={StartPage} />
			<Route path="start" component={StartPage} />
			<Route path="game" component={GamePage} />
			<Route path="game/:gameId" component={GamePage} />
			<Route path="*" component={NotFoundPage}/>
		</Route>
	</Router>
)
