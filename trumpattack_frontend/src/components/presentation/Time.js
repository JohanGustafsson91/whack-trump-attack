import React, { PropTypes } from 'react'

// Add different colors and sound

const Time = ({time}) => (
	<div className="time-left__container">
		<p className="no-margin time-left__title">Time left</p>
		<p className="no-margin time-left__time countdown">{time}</p>
	</div>
)

Time.propTypes = {
	time: PropTypes.number.isRequired
}

export default Time
