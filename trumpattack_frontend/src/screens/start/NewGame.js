import React, { PropTypes } from 'react'
import { compose, withState, mapProps } from 'recompose'

const NewGame = ({cancel, updateName, name, handleCreateGame, visible}) =>
visible ? (
	<div className="text-center">
		<h4>Create new game</h4>
		<p>
			<input
				type="text"
				className="text-input"
				placeholder="Enter your name"
				onChange={updateName}
				value={name}
				/>
		</p>
		<p>
			<button
				type="button"
				className="btn margin-top"
				onClick={handleCreateGame}>Create</button>
		</p>
		<p>
			<button
				type="button"
				className="btn"
				onClick={cancel}>Cancel</button>
		</p>
	</div>
) : null

NewGame.propTypes = {
	cancel: PropTypes.func.isRequired,
	updateName: PropTypes.func.isRequired,
	handleCreateGame: PropTypes.func.isRequired,
	name: PropTypes.string
}

const addState = compose(
	withState('name', 'setName', ''),

	mapProps(({ setName, name, createGame, ...rest }) => ({
		updateName: element => setName(element.target.value),
		handleCreateGame: () => {
			if (name.length) {
				createGame(name)
			}
		},
		...rest
	}))
)

export default addState(NewGame)
