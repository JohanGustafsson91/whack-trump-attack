import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose, withState, mapProps } from 'recompose'
import { createGame } from '../../redux/modules/game/actions'
import GameMenu from '../presentation/GameMenu'
import GameMenuCreate from '../presentation/GameMenuCreate'
import PageWrapper from '../presentation/PageWrapper'
import GameMenuJoin from '../presentation/GameMenuJoin'
import GameMenuRules from '../presentation/GameMenuRules'

const StartPage = ({filter, updateFilter, createNewGame}) => (
	<PageWrapper title={'Trump Attack'}>
		<GameMenu
			visible={filter === 'none'}
			select={updateFilter}
			/>

		<GameMenuCreate
			visible={filter === 'createGame'}
			createGame={createNewGame}
			cancel={() => updateFilter('none')}
			/>

		<GameMenuJoin
			visible={filter === 'joinGame'}
			cancel={() => updateFilter('none')}
			/>

		<GameMenuRules
			visible={filter === 'showRules'}
			cancel={() => updateFilter('none')}
			/>
	</PageWrapper>
)

StartPage.propTypes = {
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
)(addState(StartPage))
