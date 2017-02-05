import React, { PropTypes } from 'react'
import { lifecycle } from 'recompose'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { findGame } from '../../redux/modules/game/actions'
import * as STATUS from '../../redux/modules/game/statuses'

import WaitingForPlayer from '../presentation/WaitingForPlayer'
import CountDownGame from '../presentation/CountDownGame'
import GameError from '../presentation/GameError'
import JoinGame from './JoinGame'
import Playing from './Playing'
import GameOver from './GameOver'

// TODO Send update to backend about leaving game. m
// window.onbeforeunload = () => 'You will lose the Game.'

const GamePage = ({activeComponent}) => (
	<div>
		{activeComponent}
	</div>
)

GamePage.propTypes = {
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
				<GameError message={'Something went wrong'} />
			)]
		]))(status)
	)(game.gameInfo, game.players)
})

const life = lifecycle({
	componentDidMount() {
		if (!this.props.status && this.props.params.gameId) {
			this.props.dispatch(findGame(this.props.params.gameId))
		}
	}
})

export default connect(mapStateToProps)(life(GamePage))
