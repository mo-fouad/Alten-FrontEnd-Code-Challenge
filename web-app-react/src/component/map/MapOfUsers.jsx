import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react';
import Paper from "@material-ui/core/Paper";
import UserView from './oneUser'

// Starter COmponnent
const AnyReactComponent = ({text}) => <div>{text}</div>;


class MapView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {//59.3134343,17.7800174,9.5z
                lat: 59.3134343,
                lng: 17.7800174
            },
            zoom: 8
        }
    }


    render() {
        const {userData: {users, vehicles} = {}} = this.props;

        return (
            <Paper style={{height: '78vh', width: 'auto' ,margin:"0 10px"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyCILV7VK7gAsB46sSROM0D786_Vb4csxro"}}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {users.map(user => (
                        <UserView key={user.id}
                                  lat={user.lat}
                                  lng={user.long}
                                  userData={user}
                                  userCars={vehicles.filter(vehicle => user.id === vehicle.user_id)}
                        />
                    ))
                    }
                </GoogleMapReact>
            </Paper>
        )
    }
}

export default MapView