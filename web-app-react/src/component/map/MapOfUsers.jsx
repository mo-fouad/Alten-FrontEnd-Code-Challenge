import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Paper from "@material-ui/core/Paper";
import UserView from "./oneUser";
import PropTypes from "prop-types";

class MapView extends Component {
    state = {
        center: {
            //59.3134343,17.7800174,9.5z
            lat: 59.3134343,
            lng: 17.7800174
        },
        zoom: 8
    };

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
        })
    };

    render() {
        const { userData: { users, vehicles } = {} } = this.props;

        return (
            <Paper style={{ height: "78vh", width: "auto", margin: "0 10px" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyCILV7VK7gAsB46sSROM0D786_Vb4csxro"
                    }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {users.map(user => (
                        <UserView
                            key={user.id}
                            lat={user.lat}
                            lng={user.long}
                            userData={user.user_name}
                            userCars={vehicles.filter(
                                vehicle => user.id === vehicle.user_id
                            )}
                        />
                    ))}
                </GoogleMapReact>
            </Paper>
        );
    }
}

export default MapView;
