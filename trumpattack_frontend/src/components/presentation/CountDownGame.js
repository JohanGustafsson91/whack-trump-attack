import React, { PropTypes } from 'react'
import PageWrapper from '../../components/presentation/PageWrapper'

const CountDownGame = ({time}) => (
	<PageWrapper title={'Trump attack'}>
		<p>Game starts in</p>
		<h1 className="logo countdown">{time}</h1>
	</PageWrapper>
)

CountDownGame.propTypes = {
	time: PropTypes.number
}

export default CountDownGame
