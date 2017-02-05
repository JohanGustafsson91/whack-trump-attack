import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import '../assets/style/base.scss'

const App = ({ children }) => (
	<div>
		{children}
	</div>
)

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default connect()(App)
