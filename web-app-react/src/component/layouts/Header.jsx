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

function Header(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        en: 'En',
        se: 'Se',
    });
    function handleChange(event) {
        console.log(event.target.value)
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
                        {props.words.logo}
                    </Typography>


                    <FormControl className={classes.menuLang}>

                        <Select
                            className={classes.formControl}
                            value={values.en}
                            name='En'
                            onChange={(e) => props.changeLang(e.target.value)}
                        >
                            <MenuItem value={"en"}>En</MenuItem>
                            <MenuItem value={"se"}>Se</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" onClick={props.onChangeFullScreen} className={classes.button}>
                        <FullscreenIcon></FullscreenIcon>
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header