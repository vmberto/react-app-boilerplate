import {
    createStore,
    Store,
    applyMiddleware,
    Middleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { RepositoryReducerState } from 'app/redux/ducks/repository/types';
import rootReducer from 'app/redux/ducks/rootReducer';
import rootSaga from 'app/redux/ducks/rootSaga';

export interface ApplicationState {
    repositories: RepositoryReducerState
}

const middlewares: Middleware[] = [];

// redux logger middlware
if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger({ collapsed: true, duration: true, diff: true }));
}

// saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store: Store<ApplicationState> = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;
