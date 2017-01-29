import React, {PropTypes} from 'react'
import PageWrapper from '../../components/containers/PageWrapper'
import GameLink from './GameLink'
import Loading from './Loading'

const WaitingForPlayer = ({inviteSeen}) => (
	<PageWrapper title={'Trump attack'}>
		<GameLink />
		<Loading />
		<p>{getGameStatus(inviteSeen)}</p>
	</PageWrapper>
)

function getGameStatus(inviteSeen) {
	return inviteSeen ?
	'Opponent have seen the invite!' :
	'Waiting for player to get the invite...'
}

WaitingForPlayer.propTypes = {
	inviteSeen: PropTypes.bool
}

export default WaitingForPlayer
