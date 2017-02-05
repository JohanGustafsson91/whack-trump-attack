import React, {PropTypes} from 'react'
import GameScoreItem from './GameScoreItem'

const GameScore = ({players}) => (
	<div>
		<GameScoreItem
			colOneText={'PLAYER'}
			colTwoText={'SCORE'}
			isHeader={'true'}
			/>

		{
			players.map((player, i) =>
				<GameScoreItem
					key={`res_${i}`}
					colOneText={player.name}
					colTwoText={player.score}
					/>
			)
		}
	</div>

)

GameScore.propTypes = {
	players: PropTypes.array.isRequired
}

export default GameScore
