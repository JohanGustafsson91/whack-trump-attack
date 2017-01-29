import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../../../src/components/menu/MenuItem';
import Menu from '../../../src/components/menu/Menu';

test('Should render two menu items', t => {
	const wrapper = shallow(<Menu />);
	t.deepEqual(wrapper.find(MenuItem).length, 2);
});
