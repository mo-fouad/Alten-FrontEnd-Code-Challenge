import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react';
import Paper from "@material-ui/core/Paper";

// Starter COmponnent
const AnyReactComponent = ({text}) => <div>{text}</div>;


class MapView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {//58.9536859,14.6394602,6.79z
                lat: 58.9536859,
                lng: 14.6394602
            },
            zoom: 7
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
                        <AnyReactComponent key={user.id}
                            lat={user.lat}
                            lng={user.long}
                            text={user.user_name}
                        />
                    ))
                    }
                </GoogleMapReact>
            </Paper>
        )
    }
}

export default MapView