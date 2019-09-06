import React from 'react'
import {Grid, makeStyles, Paper, Switch} from "@material-ui/core";
import Select from 'react-select'


const useStyles = makeStyles(theme => ({
    searchCard: {
        margin: theme.spacing(2),
        width: 'auto',
    },
    paper: {
        padding: theme.spacing(2)
    },
    switchToRight: {
        textAlign: 'right'
    }
}));


function SearchCard(props) {
    const classes = useStyles();
    // updating Drop select from the Props
    const userOptions = []
    props.users.forEach(user => {
        userOptions.push({value: user.id, label: user.user_name})
    });


    // Passing cehcked Event to the parent State
    const SwitchChange = () => event => {
        props.onChangeActive(event.target.checked)
    };

    // Passing Selected Users to the parent State
    const SelectChange = (usersPicked) => {

        let ArrOfIds = [];
        if (usersPicked && usersPicked.length > 0) {
            usersPicked.forEach(user => {
                ArrOfIds.push(user.value)
            });
        }
        props.onUsersPicked(ArrOfIds)
    }


    return (

        <div>
            <Grid container className={classes.searchCard}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2} direction="row" justify="center">
                            <Grid item xs={9}>
                                <Select
                                    placeholder={props.words.select}
                                    onChange={usersPicked => SelectChange(usersPicked)}
                                    options={userOptions} isMulti/>
                            </Grid>
                            <Grid className={classes.switchToRight} item xs={3}>
                                <span> {props.words.active}:</span>
                                <Switch
                                    onChange={SwitchChange()}
                                    color="primary"
                                    inputProps={{'aria-label': 'primary checkbox'}}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchCard