const R = require('ramda')

// En funktion som fyller på tre whacks
export const getWhacks = () => [1, 3, 9]

export const updateWhacks = (whacks, smashed) => {
	const smashedWhackRemoved = whacks.filter(whack => whack !== smashed)
	return R.concat(smashedWhackRemoved, [getNewWhack(whacks)])
}

function getNewWhack(currentWhacks) {
	let newWhack = getRandomWhack()
	newWhack = whackAlreadyExists(currentWhacks, newWhack) ? null : newWhack
	return newWhack ? newWhack : getNewWhack(currentWhacks)
}

function getRandomWhack() {
	return parseInt(Math.random() * 18, 10) + 0
}

function whackAlreadyExists(currentWhacks, newWhack) {
	return currentWhacks.filter(whack => whack === newWhack).length > 0
}

export function getResult(players) {
	const sortedPlayers = players.sort((a, b) => b.score - a.score)
	const winners = sortedPlayers.filter(player => player.score === sortedPlayers[0].score)

	return {
		winner: winners.length === 2 ? null : winners[0].id,
		players: sortedPlayers
	}
}
