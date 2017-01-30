/**
 * Selectors for Game module
 */

export const getBoardWithNumberRemoved = (list, itemToRemove) =>
	list.filter(item => item !== itemToRemove)

export const getWinners = sortedPlayers =>
	sortedPlayers.filter(player => player.score === sortedPlayers[0].score)

export const findInArray = (list, theItem) =>
	list.filter(item => item === theItem)

export const getSortedArray = (list, field, asc) =>
	asc ?
	list.sort((a, b) => a[field] - b[field]) :
	list.sort((a, b) => b[field] - a[field])
