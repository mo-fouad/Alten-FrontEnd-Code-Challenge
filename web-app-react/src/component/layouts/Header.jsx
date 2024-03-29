import React, { Fragment } from "react";
import { AppBar, Button, FormControl, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

const useStyles = makeStyles(theme => ({
    menuLang: {
        marginLeft: "auto"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function Header(props) {
    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        {props.words.logo}
                    </Typography>
                    <FormControl className={classes.menuLang}>
                        <Select
                            className={classes.formControl}
                            value={props.currentLang}
                            name="En"
                            onChange={e => props.changeLang(e.target.value)}
                        >
                            <MenuItem value={"en"}>En</MenuItem>
                            <MenuItem value={"se"}>Se</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" onClick={props.onChangeFullScreen} className={classes.button}>
                        <FullscreenIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

Header.propTypes = {
    words: PropTypes.shape({
        logo: PropTypes.string
    }),
    currentLang: PropTypes.string.isRequired,
    changeLang: PropTypes.func,
    onChangeFullScreen: PropTypes.func
};

export default Header;
