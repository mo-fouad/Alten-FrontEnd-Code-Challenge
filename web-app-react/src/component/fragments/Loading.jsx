import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
    loadingContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));


function LoadingCircle() {
    const classes = useStyles();
    return (
        <div className={classes.loadingContainer}>
            <CircularProgress className={classes.progress}/>
        </div>
    )
}

export default LoadingCircle