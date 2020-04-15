import { all, takeLatest } from 'redux-saga/effects';

import { RepositoryActions } from 'app/redux/ducks/repository/types';

import { load } from 'app/redux/ducks/repository/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(RepositoryActions.LOAD_REQUEST, load),
    ]);
}
