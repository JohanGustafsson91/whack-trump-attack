import {
	getBoardWithNumberRemoved,
	getWinners,
	findInArray,
	getSortedArray
} from './selectors'

const R = require('ramda')

export const updateBoard = (numbers, numberToRemove) => R.concat(
	getBoardWithNumberRemoved(numbers, numberToRemove),
	getNewUniqueNumberToBoard(numbers)
)

export const getGameBoard = (total, board = []) => {
	R.range(0, total).forEach(() => {
		board = updateBoard(board, -1)
	})

	return board
}

export const updateScore = (players, playerId) => players.map(player => ({
	...player,
	score: player.id === playerId ? player.score + 1 : player.score
}))

export const getResult = players => {
	const sortedPlayers = getSortedArray(players, 'score', false)
	const winners = getWinners(sortedPlayers)

	return {
		winner: winners.length === 2 ? null : winners[0].id,
		players: getSortedArray(players, 'score', false)
	}
}

function getNewUniqueNumberToBoard(currentNumbers) {
	let newNumber = getRandomNumber(0, 18, 10)
	newNumber = alreadyExistsInBoard(currentNumbers, newNumber) ? null : newNumber

	return newNumber ? [newNumber] : getNewUniqueNumberToBoard(currentNumbers)
}

function getRandomNumber(fromNumber, toNumber, base) {
	return parseInt(Math.random() * toNumber, base) + fromNumber
}

function alreadyExistsInBoard(currentNumber, newNumber) {
	return findInArray(currentNumber, newNumber).length > 0
}
