import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import MapIcon from "@material-ui/icons/Map";
import TableChartIcon from "@material-ui/icons/TableChart";

const useStyles = makeStyles({
    root: {
        width: "100%",
        background: "#eee",
        bottom: "0",
        position: "fixed"
    }
});

function Footer() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    return (
        <footer>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction component={Link} to="/table" label="Table View" icon={<TableChartIcon />} />
                <BottomNavigationAction component={Link} to="/map" label="Map View" icon={<MapIcon />} />
            </BottomNavigation>
        </footer>
    );
}

export default Footer;
