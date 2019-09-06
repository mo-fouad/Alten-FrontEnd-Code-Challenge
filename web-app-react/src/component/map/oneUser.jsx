import React from 'react'
import {makeStyles, Typography} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";


const useStyles = makeStyles(theme => ({
    root: {
        width: "250px",
        padding: theme.spacing(2),
        fontSize: "14px",
        background: "#fff"
    },
    nameOfUSerCar: {
        padding: '10px',
        textAlign: 'center',
        background: '#eee'
    },
}));

function userView(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="body1" className={classes.nameOfUSerCar}>{props.userData.user_name}</Typography>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Plate</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <>
                        {props.userCars.map(car =>
                                <TableRow key={car.reg_number}>
                                    <TableCell>{car.reg_number}</TableCell>
                                    <TableCell align="center">{car.status}</TableCell>
                                </TableRow>
                        )}
                    </>
                </TableBody>
            </Table>

        </div>
    )
}

export default userView