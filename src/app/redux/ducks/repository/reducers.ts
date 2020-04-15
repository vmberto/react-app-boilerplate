import { RepositoryReducerState, RepositoryActions } from 'app/redux/ducks/repository/types';
import { Reducer } from 'redux';

const INITIAL_STATE: RepositoryReducerState = {
    data: [],
    error: false,
    loading: false,
};

const reducer: Reducer<RepositoryReducerState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case RepositoryActions.LOAD_REQUEST:
            return {
                ...state, loading: true,
            };
        case RepositoryActions.LOAD_SUCCESS:
            return {
                ...state, loading: false, error: false, data: action.payload.data,
            };
        case RepositoryActions.LOAD_FAILURE:
            return {
                ...state, loading: false, error: true, data: [],
            };
        default:
            return state;

    }

};

export default reducer;
