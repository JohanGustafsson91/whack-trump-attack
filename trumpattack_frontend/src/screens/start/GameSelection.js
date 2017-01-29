import React, {PropTypes} from 'react'

const GameSelection = ({visible, select}) => (
	<div>
		<div>
			<button
				type="button"
				className={`btn margin-bottom ${visible ? 'visible' : 'hidden'}`}
				onClick={() => select('createGame')}>New game</button>
		</div>

		<div>
			<button
				type="button"
				className={`btn margin-bottom ${visible ? 'visible' : 'hidden'}`}
				onClick={() => select('joinGame')}>Join Game</button>
		</div>

		<div>
			<button
				type="button"
				className={`btn margin-bottom ${visible ? 'visible' : 'hidden'}`}
				onClick={() => select('showRules')}>Rules</button>
		</div>
	</div>
)

GameSelection.propTypes = {
	visible: PropTypes.bool,
	select: PropTypes.func
}

export default GameSelection
