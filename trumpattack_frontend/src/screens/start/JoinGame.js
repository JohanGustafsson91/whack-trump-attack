import React, { PropTypes } from 'react'

const JoinGame = ({cancel, visible}) =>
visible ? (
	<div className="row">
		<div className="small-12 column">
			<h4>Join Game</h4>
			<p>
				To be implemented....
			</p>
			<p>
				<button
					type="button"
					className="btn"
					onClick={cancel}>Cancel</button>
			</p>
		</div>
	</div>
) : null

JoinGame.propTypes = {

}

export default JoinGame
