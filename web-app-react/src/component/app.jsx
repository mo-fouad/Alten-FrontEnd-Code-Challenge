import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Route, Switch } from "react-router-dom";
import * as IOActions from "../redux/actions/ioActions";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import SearchCard from "./layouts/SearchCard.jsx";

import "../scss/app.scss";
import TableView from "./layouts/TableOfUsers";
import LoadingCircle from "./fragments/Loading";
import { Container } from "@material-ui/core";
import MapView from "./map/MapOfUsers";

import words from "../localization/app";

export class App extends Component {
    static propTypes = {
        userData: PropTypes.shape({
            users: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    user_name: PropTypes.string,
                    user_address: PropTypes.string,
                    lat: PropTypes.string,
                    long: PropTypes.string
                })
            ),
            vehicles: PropTypes.arrayOf(
                PropTypes.shape({
                    user_id: PropTypes.string,
                    vehicle_id: PropTypes.string,
                    reg_number: PropTypes.string
                })
            )
        }),
        getUsersDataIo: PropTypes.func
    };

    static defaultProps = {
        userData: { users: [], vehicles: [] },
        getUsersDataIo: () => {}
    };

    state = {
        isActive: false,
        isFull: false,
        userPicked: [],
        language: "en"
    };

    componentDidMount = () => {
        const { getUsersDataIo } = this.props;
        getUsersDataIo();
    };

    changeActive = data => {
        this.setState({ isActive: data });
    };

    userHasPicked = usersPicks => {
        !usersPicks
            ? this.setState({ userPicked: [] })
            : this.setState({ userPicked: usersPicks });
    };

    filterUserData = userData => {
        let activeUsersIds = this.state.userPicked;
        let isActive = this.state.isActive;

        let updatedUsers = {
            users: userData.users,
            vehicles: userData.vehicles
        };

        // Updating Renders when user is picked,
        if (activeUsersIds.length > 0) {
            if (userData.users) {
                updatedUsers.users = userData.users.filter(user =>
                    activeUsersIds.includes(user.id)
                );
                updatedUsers.vehicles = userData.vehicles.filter(vehicle =>
                    activeUsersIds.includes(vehicle.user_id)
                );
            }
        }

        // updating renders when is Active is On
        if (isActive) {
            updatedUsers.vehicles = userData.vehicles.filter(
                vehicle => vehicle.status === "is-active"
            );
        }

        return updatedUsers;
    };

    changeLang = lang => {
        this.setState({ language: lang });
    };

    goFull = () => {
        if (this.state.isFull === false) this.setState({ isFull: true });
        else this.setState({ isFull: false });
    };

    render() {
        const { userData } = this.props; // passing users to the Search CArd
        const updatedUserData = this.filterUserData(userData);

        words.setLanguage(this.state.language);

        if (userData) {
            const { users } = updatedUserData;
            if (users && users.length > 0) {
                return (
                    <Fullscreen
                        enabled={this.state.isFull}
                        onChange={isFull => this.setState({ isFull })}
                    >
                        <Header
                            words={words}
                            onChangeFullScreen={this.goFull}
                            currentLang={this.state.language}
                            changeLang={this.changeLang}
                        />
                        <Container maxWidth="lg">
                            <SearchCard
                                words={words}
                                users={userData.users}
                                isActive={this.state.isActive}
                                onChangeActive={this.changeActive}
                                onUsersPicked={this.userHasPicked}
                            />

                            <Switch>
                                <Route exact path="/map">
                                    <MapView userData={updatedUserData} />
                                </Route>
                                <Route exact path="/(table|)">
                                    <TableView
                                        words={words}
                                        userData={updatedUserData}
                                    />
                                </Route>
                            </Switch>
                        </Container>
                        <Footer />
                    </Fullscreen>
                );
            }
        }
        return (
            <>
                <LoadingCircle />
            </>
        );
    }
}

// Map Redux state to props
function mapStateToProps(state) {
    const { userData } = state.IOReducer;

    return {
        userData
    };
}

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, IOActions), dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
