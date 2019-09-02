import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as APIActions from '../redux/actions/apiActions';
import {connect} from 'react-redux';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const {getUsersData} = this.props;
        getUsersData();
    }

    render() {

        console.log(this.props.userData);
        return (
            <div>
                Hello From App
            </div>
        )
    }
}

// Map Redux state to props
function mapStateToProps(state) {
    let {errorDetails, isFetching, userData} = state;
    return {
        errorDetails, isFetching, userData,
    };
}

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, APIActions), dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App)