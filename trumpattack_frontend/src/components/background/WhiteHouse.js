import React, {PropTypes} from 'react'
import RoofFence from './RoofFence'

const WhiteHouse = ({children}) => (
	<div className="white-house__container">
		<RoofFence />
		{children}
	</div>
)

WhiteHouse.propTypes = {
	children: PropTypes.array.isRequired
}

export default WhiteHouse
