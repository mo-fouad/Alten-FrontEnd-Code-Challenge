import React from 'react'
import {Switch,ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, makeStyles, Typography, Grid} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];


const useStyles = makeStyles(theme => ({
    expands: {
        margin: "10px",
    }
}));



function SearchCard() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };


    return (
        <div>
            <ExpansionPanel className={classes.expands}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Advanced View Options</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={10}>
                            <Select options={options} isMulti />
                        </Grid>
                        <Grid item xs={2}>
                             Active :
                            <Switch
                                checked={state.checkedB}
                                onChange={handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default SearchCard