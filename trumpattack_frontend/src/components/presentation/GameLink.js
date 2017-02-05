import React from 'react'

const copy = () => window.prompt(
	'Copy game link to clipboard: Ctrl+C, Enter',
	`${window.location.href}`
)

const GameLink = () =>
	<p><a onClick={() => copy()}>Click here to get the game link</a></p>

export default GameLink
