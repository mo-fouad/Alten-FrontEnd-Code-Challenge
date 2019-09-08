import React from "react";
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";

import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        width: "250px",
        padding: theme.spacing(2),
        fontSize: "14px",
        background: "#fff"
    },
    nameOfUSerCar: {
        padding: "10px",
        textAlign: "center",
        background: "#eee"
    }
}));

function userView(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="body1" className={classes.nameOfUSerCar}>
                {props.userData}
            </Typography>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Plate</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <>
                        {props.userCars.map(car => (
                            <TableRow key={car.reg_number}>
                                <TableCell>{car.reg_number}</TableCell>
                                <TableCell align="center">
                                    {car.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </>
                </TableBody>
            </Table>
        </div>
    );
}

userView.propTypes = {
    lng: PropTypes.string.isRequired,
    lat: PropTypes.string.isRequired,
    userData: PropTypes.string.isRequired,
    userCars: PropTypes.arrayOf(
        PropTypes.shape({
            user_id: PropTypes.string,
            vehicle_id: PropTypes.string,
            reg_number: PropTypes.string
        })
    )
};

export default userView;
