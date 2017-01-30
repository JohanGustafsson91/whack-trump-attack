import React, {PropTypes} from 'react'

const GameResult = ({players}) => (
	<div>
		<div className="row">
			<div className="small-6 column">
				<span><b>PLAYER</b></span>
			</div>
			<div className="small-6 column">
				<span><b>SCORE</b></span>
			</div>
		</div>

		{
			players.map((player, i) => (
				<div key={`res_${i}`} className="row">
					<div className="small-6 column">
						<span>{player.name}</span>
					</div>
					<div className="small-6 column">
						<span>{player.score}</span>
					</div>
				</div>
			))
		}
	</div>

)

GameResult.propTypes = {

}

export default GameResult
