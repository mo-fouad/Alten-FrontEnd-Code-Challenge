import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
//import * as APIActions from '../redux/actions/apiActions';
import * as IOActions from '../redux/actions/ioActions'
import {connect} from 'react-redux';

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import SearchCard from "./layouts/SearchCard.js"

import '../scss/app.scss'
import TableView from "./layouts/TableOfUsers";
import Container from "@material-ui/core/Container";
import MapView from "./map/MapOfUsers";


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        const {getUsersDataIo} = this.props;
        getUsersDataIo();
    }

    render() {
        const {userData} = this.props;

        if (userData) {
            const {users, vehicles} = userData
            if (users && users.length > 0) {
                return (
                    <Fragment>
                        <Header></Header>
                        <Container maxWidth="lg">
                            <SearchCard></SearchCard>
                            <MapView userData={this.props.userData}></MapView>
                            {/*<TableView userData={this.props.userData}></TableView>*/}
                        </Container>



                        {/*<div className="hidden">*/}
                        {/*    {users.map(({user_name, id}) => (<li key={id}>{user_name}</li>))*/}
                        {/*    }*/}
                        {/*    <hr/>*/}
                        {/*    {vehicles.map(({reg_number, status}) => <li key={reg_number}>{reg_number} {status}</li>)}*/}
                        {/*</div>*/}
                        {/*<MapView></MapView>*/}
                        {/*<TableView></TableView>*/}
                        {/*<div className="main-control">*/}

                        {/*</div>*/}
                        <Footer></Footer>
                    </Fragment>
                )
            }
        }
        return (
            <div>
                Loading
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