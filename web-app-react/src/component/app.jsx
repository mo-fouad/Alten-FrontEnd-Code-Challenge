import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
//import * as APIActions from '../redux/actions/apiActions';
import * as IOActions from '../redux/actions/ioActions'
import {connect} from 'react-redux';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const {getUsersDataIo} = this.props;
        getUsersDataIo();
    }

    render() {
        // destructuring UserData & destructuring  user & vehicles from it,
        // setting up initial value for userData

        console.log(this.props.userData);
        const {userData} = this.props;

        if (userData) {
            const {users, vehicles} = userData
            if (users && users.length > 0) {
                return (
                    <div>
                        {users.map(({user_name, id}) => (<li key={id}>{user_name}</li>))
                        }
                        <hr/>
                        {vehicles.map(({reg_number, status}) => <li key={reg_number}>{reg_number} {status}</li>)}
                    </div>
                )
            }
        }
        // const {userData: {users, vehicles} = {}} = this.props;
        //
        // if (userData) {
        //     console.log("HEllo")
        // }
        // // if (userData && userData.users && userData.users.length > 0) {
        //     return (
        //         <div>
        //             {users.map(({user_name, id}) => (<li>{user_name}</li>))
        //             }
        //             <hr/>
        //             {vehicles.map( ({reg_number, status}) => <li>{reg_number} {status}</li>)}
        //         </div>
        //     )
        // }

        return (
            <div>
                Error
            </div>
        )
    }
}

// Map Redux state to props
function mapStateToProps(state) {
    const {userData} = state.IOReducer;
    return {
        userData
    };
}

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, IOActions), dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App)