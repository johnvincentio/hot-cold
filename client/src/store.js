
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import makeRootReducer from './reducers/';

export default (initialState = {}) => {
	const middleware = [thunk];
	const enhancers = [];
	const store = createStore(
		makeRootReducer,
		initialState,
		compose(
			applyMiddleware(...middleware),
			...enhancers,
		),
	);
	return store;
};

// const middleware = applyMiddleware(thunk);

// export default createStore(reducer, middleware);

// const finalCreateStore = compose(applyMiddleware(thunk, logger))(createStore);

// export default function configureStore(state = {}) {
// 	const store = createStoreWithMiddleware(reducer, state);
// 	return store;
// 	// return finalCreateStore(reducer, initialState);
// }

// export default createStore(reducer, applyMiddleware(thunk));

/*
import { createStore } from 'redux';

import * as reducers from './reducers/index';

export default createStore(reducers.repositoryReducer);
*/
