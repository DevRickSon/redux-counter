import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';

//import * as actions from '../actions';
import * as actions from '../modules';
import { connect } from 'react-redux';

import { getRandomColor } from '../utils';

class App extends Component {
    render () {
        const { onCreate, onRemove } = this.props;
        return (
            <div>
                <Buttons onCreate={onCreate} onRemove={onRemove} />
                <CounterListContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapDispatchToProps)(App);
