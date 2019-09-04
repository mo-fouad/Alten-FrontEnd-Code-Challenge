import React from 'react'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: 'auto',
        margin: theme.spacing(3),
        overflowX: 'auto'

    },
    table: {

    },
}));


function TableView(props) {
    const classes = useStyles();
    const {userData: {users, vehicles} = {}} = props;

    return (

        <>
            {users.map(user => (
                <Paper key={user.id} className={classes.root}>
                    <Typography variant="h6">{user.user_name}</Typography>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>User Name </TableCell>
                                <TableCell align="center">Care ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <>
                                {vehicles.map(car => {
                                        if (user.id === car.user_id) return (
                                            <TableRow key={car.reg_number}>
                                                <TableCell>{car.reg_number}</TableCell>
                                                <TableCell align="center">{car.status}</TableCell>
                                            </TableRow>
                                        )
                                    }
                                )}
                            </>
                        </TableBody>
                    </Table>
                </Paper>
            ))}
        </>

    )
}

export default TableView