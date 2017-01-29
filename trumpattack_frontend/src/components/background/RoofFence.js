import React from 'react'
import * as R from 'ramda'

const RoofFence = () => (
	<div className="white-house__roof-back-fence">
		{
			R.range(0, 25).map((box, i) =>
				<div
					key={`roofFence_${i}`}
					className="white-house__roof-back-fence-hole"></div>
			)
		}
	</div>
)

export default RoofFence
