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

export const getResult = players => players.sort((a, b) => a.score - b.score)
