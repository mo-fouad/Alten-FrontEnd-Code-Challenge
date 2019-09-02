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


        // destructuring UserData & user & vehicles,
        // setting up initial value for userData
        const {isFetching, userData: {users, vehicles} = {}, errorDetails} = this.props;

        if (isFetching) {
            return <div>Loading</div>
        }

        if (users && users.length > 0) {
            return (
                <div>
                    {users.map(({user_name, id}) => (<li>{user_name}</li>))
                    }
                    <hr/>
                    {vehicles.map( ({reg_number, status}) => <li>{reg_number} {status}</li>)}
                </div>
            )
        }

        return (
            <div>
                Error
            </div>
        )
    }
}

// Map Redux state to props
function mapStateToProps(state) {
    const {errorDetails, isFetching, userData} = state.APIReducer;
    return {
        errorDetails, isFetching, userData,
    };
}

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, APIActions), dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App)