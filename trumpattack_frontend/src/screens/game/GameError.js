import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import PageWrapper from '../../components/presentation/PageWrapper'

const GameError = ({message}) => (
	<PageWrapper title={'Oh noo :/'}>
		<p>Im sorry too say that</p>
		<p className="error">{message}</p>
		<p><Link to="/">Start a new game here</Link></p>
	</PageWrapper>
)

GameError.propTypes = {

}

export default GameError
