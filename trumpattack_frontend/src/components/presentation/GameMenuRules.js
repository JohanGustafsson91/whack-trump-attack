import React, { PropTypes } from 'react'

const GameMenuRules = ({cancel, visible}) =>
visible ? (
	<div className="row">
		<div className="small-12 column">
			<h4>Game Rules</h4>
			<p>You compete against another to see who can beat Trump most times.</p>
			<p>After a minute, there will be two winners. One who has beaten Trump most times and one who has beaten Trump.</p>
			<p>
				<button
					type="button"
					className="btn"
					onClick={cancel}>Cancel</button>
			</p>
		</div>
	</div>
) : null

GameMenuRules.propTypes = {
	visible: PropTypes.bool.isRequired,
	cancel: PropTypes.func.isRequired
}

export default GameMenuRules
