import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import PageWrapper from '../../components/containers/PageWrapper'
import GameResult from './GameResult'

const GameOver = ({winner, result}) => (
	<PageWrapper title={'Game Over'}>
		{winner === null ? <h4>It was a draw!</h4> : null}
		{winner === true ? <h4>You won!!</h4> : null}
		{winner === false ? <h4>You lost...</h4> : null}

		<GameResult players={result} />

		<button className="btn margin-top" onClick={() => browserHistory.push('/')}>Start page</button>

	</PageWrapper>
)

GameOver.propTypes = {

}

function getWinner(playerId, winner) {
	if (winner === null) {
		return null
	}

	return winner === playerId
}

const mapStateToProps = ({game}) => ({
	winner: getWinner(game.me, game.gameInfo.winner),
	result: game.players
})

export default connect(mapStateToProps)(GameOver)
