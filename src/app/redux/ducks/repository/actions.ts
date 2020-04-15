import { action } from 'typesafe-actions';
import { RepositoryActions, Repository } from 'app/redux/ducks/repository/types';


export const loadRequest = () => action(RepositoryActions.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) => action(RepositoryActions.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RepositoryActions.LOAD_FAILURE);
