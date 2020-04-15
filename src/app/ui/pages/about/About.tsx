import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from 'app/redux';
import { RepositoryReducerState } from 'app/redux/ducks/repository/types';
import * as RepositoryActions from 'app/redux/ducks/repository/actions';

interface AboutProps {
    repositories: RepositoryReducerState
    loadRequest(): void
}

class About extends Component<AboutProps> {

    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest();
    }

    render() {
        const { repositories } = this.props;

        return (
            <ul>
                {repositories.data.map((repository) => (<li>{repository.name}</li>))}
            </ul>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);
