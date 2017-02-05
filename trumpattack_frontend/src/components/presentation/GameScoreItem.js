import React, {PropTypes} from 'react'

const GameScoreItem = ({colOneText, colTwoText, isHeader}) => (
	<div className="row">
		<div className="small-6 column">
			<span className={isHeader ? 'bold' : null}>{colOneText}</span>
		</div>
		<div className="small-6 column">
			<span className={isHeader ? 'bold' : null}>{colTwoText}</span>
		</div>
	</div>
)

GameScoreItem.propTypes = {
	colOneText: PropTypes.string,
	colTwoText: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	isHeader: PropTypes.string
}

export default GameScoreItem
