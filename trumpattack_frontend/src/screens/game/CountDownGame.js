import React, { PropTypes } from 'react'
import { lifecycle } from 'recompose'
import PageWrapper from '../../components/containers/PageWrapper'

const CountDownGame = ({time}) => (
	<PageWrapper title={'Trump attack'}>
		<p>Game starts in</p>
		<h1 className="logo countdown">{time}</h1>
	</PageWrapper>
)

CountDownGame.propTypes = {
	time: PropTypes.number
}

const life = lifecycle({
	componentDidMount() {
		console.log('cdm')
	},

	componentDidUpdate(prevProps, prevState) {
		console.log('cdu')
	}
})

export default life(CountDownGame)
