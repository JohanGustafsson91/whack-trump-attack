import React, {PropTypes} from 'react'
import TrumpImg from '../../assets/images/trump.png'
import TrumpImg2 from '../../assets/images/trump2.png'
import SuitImg from '../../assets/images/suit.png'

const Whack = ({value, onSmash}) => (
	<div className="whack" onClick={() => onSmash(value)}>
		<img src={TrumpImg} className="face" />
		<img src={SuitImg} className="suit" />
	</div>
)

Whack.propTypes = {

}

export default Whack
