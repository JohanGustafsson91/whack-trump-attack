import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose, withState, mapProps } from 'recompose'
import { createGame } from '../../redux/modules/game/actions'
import PageWrapper from '../../components/containers/PageWrapper'
import Heaven from '../../components/background/Heaven'
import Grass from '../../components/background/Grass'
import GameSelection from './GameSelection'
import NewGame from './NewGame'
import JoinGame from './JoinGame'
import GameRules from './GameRules'

const title = true

const Start = ({filter, updateFilter, createNewGame}) => (
	<div>
		<PageWrapper title={'Trump Attack'}>
			<GameSelection
				visible={filter === 'none'}
				select={updateFilter}
				/>

			<NewGame
				visible={filter === 'createGame'}
				createGame={createNewGame}
				cancel={() => updateFilter('none')}
				/>

			<JoinGame
				visible={filter === 'joinGame'}
				cancel={() => updateFilter('none')}
				/>

			<GameRules
				visible={filter === 'showRules'}
				cancel={() => updateFilter('none')}
				/>
		</PageWrapper>

	</div>
)

Start.propTypes = {
	filter: PropTypes.string.isRequired,
	updateFilter: PropTypes.func.isRequired,
	createNewGame: PropTypes.func.isRequired
}

const addState = compose(
	withState('filter', 'setFilter', 'none'),

	mapProps(({setFilter, ...rest}) => ({
		updateFilter: selection => setFilter(selection),
		...rest
	}))
)

const mapStateToProps = ({game}) => ({...game})

const mergeProps = (props, {createGame}) => ({
	...props,
	createNewGame: (name, price) => createGame(name, price)
})

export default connect(
	mapStateToProps,
	{ createGame },
	mergeProps
)(addState(Start))
