import test from 'ava';
// import sinon from 'sinon';
import * as actions from '../../src/redux/actions/featureActions';

test('Action -> filterBy()', t => {
	const expectedAction = {type: actions.FILTER, query: 'search'};
	const result = actions.filterBy('search');
	t.deepEqual(result, expectedAction);
});
