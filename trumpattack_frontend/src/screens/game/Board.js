import React, { PropTypes } from 'react'
import * as R from 'ramda'
import WhiteHouse from '../../components/background/WhiteHouse'
import Whack from './Whack'

const Board = ({whacks, onSmash}) => (
	<WhiteHouse>
		{
			R.range(0, 18).map(box => (
				<div className="white-house__window" key={`box_${box}`}>
					{
						whacks
							.filter(inBox => inBox === box)
							.map(whack => (
								<Whack
									key={`whack_${whack}`}
									value={whack}
									onSmash={onSmash}
								/>
							))
					}
				</div>
			))
		}
	</WhiteHouse>
)

Board.propTypes = {
	whacks: PropTypes.array.isRequired,
	onSmash: PropTypes.func.isRequired
}

export default Board
