import React, { PropTypes } from 'react'
import { lifecycle } from 'recompose'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { findGame } from '../../redux/modules/game/actions'
import * as STATUS from '../../redux/modules/game/statuses'

import WaitingForPlayer from './WaitingForPlayer'
import JoinGame from './JoinGame'
import CountDownGame from './CountDownGame'
import Playing from './Playing'
import GameOver from './GameOver'
import GameError from './GameError'

window.onbeforeunload = () => 'You will lose the Game.'

const Game = ({activeComponent}) => (
	<div>
		{activeComponent}
	</div>
)

Game.propTypes = {
	activeComponent: PropTypes.object.isRequired
}

const mapStateToProps = ({game, location}) => ({
	location,
	status: game.gameInfo.status,
	activeComponent: (({status, inviteSeen, time, message}) =>
		(R.cond([
			[R.equals(STATUS.WAITING), R.always(
				<WaitingForPlayer inviteSeen={inviteSeen} />
			)],
			[R.equals(STATUS.JOIN_GAME), R.always(
				<JoinGame />
			)],
			[R.equals(STATUS.COUNTDOWN), R.always(
				<CountDownGame time={time} />
			)],
			[R.equals(STATUS.PLAYING), R.always(
				<Playing />
			)],
			[R.equals(STATUS.GAME_OVER), R.always(
				<GameOver />
			)],
			[R.equals(STATUS.GAME_ERROR), R.always(
				<GameError message={message} />
			)],
			[R.T, R.always(
				<div key={'hehge'}>No one</div>
			)]
		]))(status)
	)(game.gameInfo, game.players)
})

const life = lifecycle({
	componentDidMount() {
		console.log(this.props)
		// const { game, location, findTheGame } = this.props
		// const {location} = this.props
		//
		if (!this.props.status && this.props.params.gameId) {
			console.log('find game')
			this.props.dispatch(findGame(this.props.params.gameId))
			// findTheGame(location.params.gameId)
		}
	}
})

export default connect(mapStateToProps)(life(Game))
