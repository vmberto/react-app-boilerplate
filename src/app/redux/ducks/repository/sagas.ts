import { call, put } from 'redux-saga/effects';
import api from 'app/services/api';

import { loadSuccess, loadFailure } from 'app/redux/ducks/repository/actions';

export function* load() {
    try {
        const response = yield call(api.get, 'users/UmbertoB/repos');

        yield put(loadSuccess(response.data));
    } catch (err) {
        yield put(loadFailure());
    }
}
