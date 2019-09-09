import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";

import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        width: "auto",
        margin: theme.spacing(2),
        overflowX: "auto"
    },
    nameOfUSerCar: {
        padding: "10px",
        textAlign: "center",
        background: "#eee"
    }
}));

function TableView(props) {
    const classes = useStyles();
    const { userData: { users, vehicles } = {} } = props;

    const { words } = props;

    return (
        <>
            {users.map(user => (
                <Paper key={user.id} className={classes.root}>
                    <Typography variant="h6" className={classes.nameOfUSerCar}>
                        {user.user_name}
                    </Typography>

                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>{words.carId}</TableCell>
                                <TableCell>{words.carPlate}</TableCell>
                                <TableCell align="center">{words.carStatus}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <>
                                {vehicles.map(car => {
                                    if (user.id === car.user_id)
                                        return (
                                            <TableRow key={car.reg_number}>
                                                <TableCell>{car.vehicle_id}</TableCell>
                                                <TableCell>{car.reg_number}</TableCell>
                                                <TableCell align="center">{car.status}</TableCell>
                                            </TableRow>
                                        );
                                })}
                            </>
                        </TableBody>
                    </Table>
                </Paper>
            ))}
        </>
    );
}

TableView.propTypes = {
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
    words: PropTypes.shape({
        active: PropTypes.string,
        carId: PropTypes.string,
        carPlate: PropTypes.string,
        carStatus: PropTypes.string,
        logo: PropTypes.string,
        mapView: PropTypes.string,
        select: PropTypes.string,
        tableView: PropTypes.string
    })
};

export default TableView;
