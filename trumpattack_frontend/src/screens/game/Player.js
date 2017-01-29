import React, {PropTypes} from 'react'

const Player = ({name, score}) => (
	<div className="player__stat">
		<div className="player__stat-name">{name}</div>
		<div className="player__stat-score">{score}</div>
	</div>
)

Player.propTypes = {
	name: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired
}

export default Player
