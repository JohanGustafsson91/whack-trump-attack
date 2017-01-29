import test from 'ava';
// import sinon from 'sinon';
import * as actions from '../../src/redux/actions/featureActions';
import start from '../../src/redux/reducers/featureReducer';

test('Should return the initial state', t => {
	const expectedResult = {
		features: [
			{name: 'Webpack'},
			{name: 'React'},
			{name: 'React router'},
			{name: 'Redux'},
			{name: 'SASS'},
			{name: 'Tests utilities'}
		]
	};

	const initialState = start(undefined, {});
	t.deepEqual(initialState, expectedResult);
});

test('Should handle FILTER', t => {
	const result = start(undefined, {
		type: actions.FILTER,
		query: 'rea'
	});

	const expectedResult = {
		features: [
			{name: 'React'},
			{name: 'React router'}
		]
	};

	t.deepEqual(result, expectedResult);
});
