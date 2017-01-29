import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MenuItem = ({title, url, className}) => (
	<Link to={url} className={className}>{title}</Link>
);

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};

export default MenuItem;
