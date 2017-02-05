import React, {PropTypes} from 'react'

const TextInput = ({placeholder, value, handleChange}) =>
	<input
		type="text"
		className="text-input"
		placeholder={placeholder}
		value={value}
		onChange={handleChange}
			/>

TextInput.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string,
	handleChange: PropTypes.func.isRequired
}

export default TextInput
