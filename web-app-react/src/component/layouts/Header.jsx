import React from 'react'
import {AppBar, Toolbar, Typography, FormControl, InputLabel, Select, MenuItem , Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const useStyles = makeStyles(theme => ({
    menuLang: {
        marginLeft:"auto",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        margin: theme.spacing(1),
    },

}));

function Header() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        lang: 'En',
    });

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        Vehicles App
                    </Typography>


                    <FormControl className={classes.menuLang}>
                        <Select
                            className={classes.select}
                            value="En"
                            name="name"
                            onChange={handleChange}
                        >
                            <MenuItem value="En">En</MenuItem>
                            <MenuItem value="Se">Se</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" className={classes.button}>
                        <FullscreenIcon></FullscreenIcon>
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header