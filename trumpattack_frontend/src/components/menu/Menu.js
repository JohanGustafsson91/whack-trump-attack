import React from 'react';
import { routes } from '../../app/routes';
import MenuItem from './MenuItem';

const Menu = () => (
	<div>
		{
			routes.map((item, key) => {
				const isActive = item.paths
					.filter(path => path === window.location.pathname);

				return (
					<MenuItem
						key={`menuItem_${key}`}
						title={item.title}
						url={item.url}
						className={`menu__item ${isActive.length ? 'menu__item--active' : null}`}
						/>
				);
			})
		}
	</div>
);

export default Menu;
