import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import PageWrapper from '../../components/presentation/PageWrapper'
import GameResult from '../presentation/GameResult'
import GameScore from '../presentation/GameScore'

const GameOver = ({winner, result}) => (
	<PageWrapper title={'Game Over'}>
		<GameResult winner={winner} />
		<GameScore players={result} />

		<button
			className="btn margin-top"
			onClick={() => browserHistory.push('/')}>
			Start page
		</button>

	</PageWrapper>
)

GameOver.propTypes = {

}

const getWinner = (player, winner) => winner === null ? null : winner === player

const mapStateToProps = ({game}) => ({
	winner: getWinner(game.me, game.gameInfo.winner),
	result: game.players
})

export default connect(mapStateToProps)(GameOver)
