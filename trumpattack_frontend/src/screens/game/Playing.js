import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { onSmash } from '../../redux/modules/game/actions'
import Stairs from '../../components/background/Stairs'
import Heaven from '../../components/background/Heaven'
import Grass from '../../components/background/Grass'
import Board from './Board'
import Player from './Player'
import Time from './Time'

const Playing = ({game: {players, gameInfo, whacks}, handleSmash}) => {
	return (
		<div>
			<div>
				<Player name={players[0].name} score={players[0].score}	/>
				<Player name={players[1].name} score={players[1].score}	/>
				<Time time={gameInfo.time} />
			</div>

			<Heaven />
			<Grass />
			<Board whacks={whacks} onSmash={handleSmash}/>
			<Stairs />

		</div>
	)
}

Playing.propTypes = {
	game: PropTypes.object.isRequired,
	handleSmash: PropTypes.func.isRequired
}

const mapStateToProps = ({game}) => ({game})

const mergeProps = (props, {onSmash}) => ({
	...props,
	handleSmash: value => onSmash(value, props.game.gameInfo.gameId)
})

export default connect(
	mapStateToProps,
	{ onSmash },
	mergeProps
)(Playing)
