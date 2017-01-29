import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterBy } from '../../redux/actions/featureActions';

const About = ({features, filter}) => (
	<div>
		<h1>About Page</h1>

		<input
			type="text"
			placeholder="Filter"
			onChange={filter}/>

		<ul>{features.map((f, i) => <li key={`f_${i}`}>{f.name}</li>)}</ul>
	</div>
);

About.propTypes = {
	features: PropTypes.array.isRequired,
	filter: PropTypes.func.isRequired
};

const mapStateToProps = ({ start: { features } }) => ({ features });

const mergeProps = (props, {filterBy}) => {
	const filter = e => filterBy(e.target.value);
	return {...props, filter};
};

export default connect(mapStateToProps, {filterBy}, mergeProps)(About);
