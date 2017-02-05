import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => (
	<div>
		<h1>Ooops!</h1>
		<p>
			This is not the page you are looking for.
			Go to <Link to="start">Start page</Link>
		</p>
	</div>
)

export default NotFoundPage
