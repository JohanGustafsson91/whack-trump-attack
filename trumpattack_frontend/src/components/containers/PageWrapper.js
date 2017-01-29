import React, { PropTypes } from 'react'
import Heaven from '../background/Heaven'
import Grass from '../background/Grass'

const PageWrapper = ({ children, title }) => (
	<div>
		<Heaven />
		<Grass />

		<div className="section text-center">
			{
				title ?
					<h1 className="fontcolor-white no-margin-top logo">{title}</h1> : null
				}

				{children}
		</div>
	</div>
)

PageWrapper.propTypes = {
	children: PropTypes.array.isRequired,
	title: PropTypes.string
}

export default PageWrapper
