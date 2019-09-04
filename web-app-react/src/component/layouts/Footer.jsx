import React, {Fragment} from 'react'
import {BottomNavigation, BottomNavigationAction, makeStyles} from "@material-ui/core";
import MapIcon from '@material-ui/icons/Map';
import TableChartIcon from '@material-ui/icons/TableChart';

const useStyles = makeStyles({
    root: {
        width: "100%",
        background: "#eee",
        bottom: "0",
        position: "fixed"
    },
});

function Footer() {
    const classes = useStyles();
    return (
        <Fragment>
            <BottomNavigation
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Map View" icon={<MapIcon/>}/>
                <BottomNavigationAction label="Table View" icon={<TableChartIcon/>}/>
            </BottomNavigation>
        </Fragment>
    )
}

export default Footer