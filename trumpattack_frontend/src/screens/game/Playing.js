import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { onSmash } from '../../redux/modules/game/actions'
import Stairs from '../../components/background/Stairs'
import Heaven from '../../components/background/Heaven'
import Grass from '../../components/background/Grass'
import Board from './Board'
import Player from './Player'
import Time from './Time'

const Playing = ({game: {gameInfo, whacks}, player, opponent, handleSmash}) => {
	return (
		<div>
			<div>
				<Player name={player.name} score={player.score}	/>
				<Player name={opponent.name} score={opponent.score}	/>
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
	player: props.game.players.find(player => player.id === props.game.me),
	opponent: props.game.players.find(player => player.id !== props.game.me),
	handleSmash: value => onSmash(value, props.game.gameInfo.gameId)
})

export default connect(
	mapStateToProps,
	{ onSmash },
	mergeProps
)(Playing)
