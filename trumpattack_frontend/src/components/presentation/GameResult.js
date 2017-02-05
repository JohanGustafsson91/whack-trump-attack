import React, {PropTypes} from 'react'

const isDraw = winner => winner === null ? 'It was a draw' : false
const isWinner = winner => winner === null ? 'You won!' : false
const isLoser = winner => winner === null ? 'You lost...' : false

const getResultText = winner =>
	isDraw(winner) || isWinner(winner) || isLoser(winner)

const GameResult = ({winner}) => <h4>{getResultText(winner)}</h4>

GameResult.propTypes = {
	winner: PropTypes.bool
}

export default GameResult
