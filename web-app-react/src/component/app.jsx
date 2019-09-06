import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {Route, Switch} from "react-router-dom";
//import * as APIActions from '../redux/actions/apiActions';
import * as IOActions from '../redux/actions/ioActions'
import {connect} from 'react-redux';

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import SearchCard from "./layouts/SearchCard.jsx"

import '../scss/app.scss'
import TableView from "./layouts/TableOfUsers";
import LoadingCircle from "./fragments/Loading";
import {Container} from '@material-ui/core'
import MapView from "./map/MapOfUsers";


export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            userPicked: []
        }
    }

    componentDidMount = () => {
        const {getUsersDataIo} = this.props;
        getUsersDataIo();

    };

    changeActive = (data) => {
        this.setState({isActive: data});
    };

    userHasPicked = (usersPicks) => {
        !usersPicks ?
            this.setState({userPicked: []}) :
            this.setState({userPicked: usersPicks})
    };

    filterUserData = (userData) => {
        let activeUsersIds = this.state.userPicked;
        let isActive = this.state.isActive;

        let updatedUsers = {
            users: userData.users,
            vehicles: userData.vehicles
        };

        // Updating Renders when user is picked,
        if (activeUsersIds.length > 0) {
            if (userData.users) {
                updatedUsers.users = userData.users.filter(user => activeUsersIds.includes(user.id));
                updatedUsers.vehicles = userData.vehicles.filter(vehicle => activeUsersIds.includes(vehicle.user_id));
            }
        }

        // updating renders when is Active is On
        if (isActive) {
            updatedUsers.vehicles = userData.vehicles.filter(vehicle => vehicle.status === "is-active");
        }

        return updatedUsers;
    };


    render() {
        const {userData} = this.props; // passing users to the Search CArd

        const updatedUserData = this.filterUserData(userData);

        if (userData) {
            const {users} = updatedUserData;
            if (users && users.length > 0) {
                return (
                    <Fragment>
                        <Header></Header>
                        <Container maxWidth="lg">
                            <SearchCard
                                users={userData.users}
                                isActive={this.state.isActive}
                                onChangeActive={this.changeActive}
                                onUsersPicked={this.userHasPicked}>
                            </SearchCard>

                            <Switch>
                                <Route exact path="/map">
                                    <MapView userData={updatedUserData}></MapView>
                                </Route>
                                <Route exact path="/(table|)">
                                    <TableView userData={updatedUserData}></TableView>
                                </Route>
                            </Switch>
                        </Container>
                        <Footer></Footer>
                    </Fragment>
                )
            }
        }
        return (
            <>
                <LoadingCircle></LoadingCircle>
            </>
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