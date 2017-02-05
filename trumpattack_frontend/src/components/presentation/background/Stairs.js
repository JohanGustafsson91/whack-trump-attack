import React from 'react'
import * as R from 'ramda'

const Stairs = () => (
	<div className="white__house__stair--container">
		{
			R.range(0, 3).map((_, i) =>
				<div key={`stair_${i}`} className="white-house__stair"></div>
			)
		}

		<div>
			{
				R.range(0, 4).map((_, i) =>
					<div key={`pillar_${i}`} className="white-house__pillar"></div>
				)
			}
		</div>

		<div className="white-house__roof-back"></div>
	</div>
)

export default Stairs
