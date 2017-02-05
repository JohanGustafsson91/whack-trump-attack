import React, { PropTypes } from 'react'
import { withState, compose, mapProps } from 'recompose'
import TextInput from './TextInput'

const GameMenuJoin = ({cancel, visible, updateGameId, handleJoinGame, gameId}) =>
visible ? (
	<div className="row">
		<div className="small-12 column">
			<h4>Join Game</h4>
			<TextInput
				placeholder={'Enter game ID'}
				value={gameId}
				handleChange={updateGameId} />
			<p>
				<button
					type="button"
					className="btn"
					onClick={handleJoinGame}>Join game</button>
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

GameMenuJoin.propTypes = {
	visible: PropTypes.bool.isRequired,
	cancel: PropTypes.func.isRequired
}

const addState = compose(
	withState('gameId', 'setGameId', ''),

	mapProps(({ setGameId, gameId, joinGame, ...rest }) => ({
		updateGameId: element => setGameId(element.target.value),
		handleJoinGame: () => {
			if (gameId.length) {
				joinGame(gameId)
			}
		},
		...rest
	}))
)

export default addState(GameMenuJoin)
