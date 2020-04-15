/**
 * Data Type
 */
export interface Repository {
    id: number
    name: string
}

/**
 * Action types
 */
export enum RepositoryActions {
    LOAD_REQUEST = 'LOAD_REQUEST',
    LOAD_SUCCESS = 'LOAD_SUCCESS',
    LOAD_FAILURE = 'LOAD_FAILURE'
}

/**
 * Reducer State type
 */
export interface RepositoryReducerState {
    readonly data: Repository[]
    readonly loading: boolean
    readonly error: boolean
}
