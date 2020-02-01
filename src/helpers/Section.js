import React from 'react';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    sectionContainer: {
        width: '100%',
    },
    section: {
        width: '60%',
    },
}));


const Section = () => {
    const classes = useStyles();

    return (
        <Container className={classes.sectionContainer}>
            <Typography className={classes.section}>

            </Typography>
        </Container>
    )
}

export default Section;
