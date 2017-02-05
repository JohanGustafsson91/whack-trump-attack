import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { onSmash } from '../../redux/modules/game/actions'
import Stairs from '../../components/presentation/background/Stairs'
import Heaven from '../../components/presentation/background/Heaven'
import Grass from '../../components/presentation/background/Grass'
import GameStats from '../../components/presentation/GameStats'
import Board from '../presentation/Board'

const Playing = ({game: {gameInfo, whacks}, player, opponent, handleSmash}) => {
	return (
		<div>
			<GameStats player={player} opponent={opponent} time={gameInfo.time} />
			<Heaven />
			<Grass />
			<Board whacks={whacks} onSmash={handleSmash}/>
			<Stairs />
		</div>
	)
}

Playing.propTypes = {
	game: PropTypes.object.isRequired,
	handleSmash: PropTypes.func.isRequired,
	player: PropTypes.object.isRequired,
	opponent: PropTypes.object.isRequired
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
