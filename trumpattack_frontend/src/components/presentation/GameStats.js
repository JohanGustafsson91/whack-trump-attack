import React, {PropTypes} from 'react'
import Player from './Player'
import Time from './Time'

const GameStats = ({player, opponent, time}) => (
	<div>
		<Player name={player.name} score={player.score}	/>
		<Player name={opponent.name} score={opponent.score}	/>
		<Time time={time} />
	</div>
)

GameStats.propTypes = {
	player: PropTypes.object.isRequired,
	opponent: PropTypes.object.isRequired,
	time: PropTypes.number.isRequired
}

export default GameStats
