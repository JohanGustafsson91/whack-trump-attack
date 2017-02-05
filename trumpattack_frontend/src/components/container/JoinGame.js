import React, { PropTypes } from 'react'
import { compose, withState, mapProps } from 'recompose'
import { connect } from 'react-redux'
import { joinGame } from '../../redux/modules/game/actions'
import TextInput from '../../components/presentation/TextInput'
import PageWrapper from '../../components/presentation/PageWrapper'

const JoinGame = ({challenger, updateName, name, handleJoinGame}) => (
	<PageWrapper title={'Trump attack'}>
		<h4>{`${challenger} have challenged you!`}</h4>
		<TextInput
			placeholder={'Enter your name'}
			value={name}
			handleChange={updateName}
			/>
		<p>
			<button
				type="button"
				className="btn margin-top"
				onClick={() => handleJoinGame(name)}>Join Game</button>
		</p>
	</PageWrapper>
)

JoinGame.propTypes = {
	challenger: PropTypes.string.isRequired,
	updateName: PropTypes.func.isRequired,
	handleJoinGame: PropTypes.func.isRequired,
	name: PropTypes.string
}

const mapStateToProps = ({game}) => ({
	gameId: game.gameInfo.gameId,
	challenger: game.players[0].name
})

const mergeProps = (props, {joinGame}) => ({
	...props,
	handleJoinGame: name => name.length ? joinGame(props.gameId, name) : null
})

const addState = compose(
	withState('name', 'setName', ''),

	mapProps(({ setName, ...rest }) => ({
		updateName: element => setName(element.target.value),
		...rest
	}))
)

export default connect(
	mapStateToProps,
	{ joinGame },
	mergeProps
)(addState(JoinGame))
