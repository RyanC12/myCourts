import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import balcones from '../images/Balcones.jpg';
import mule from '../images/mule.png';
import northwest from '../images/northwest.png';
import SelectedCourt from '../components/SelectedCourt';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    courtContainer: {
        width: '95%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0px 15px'
    },

    titles: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    courtInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
    },
    courts: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    thumbnail: {
        width: '50px',
        height: '50px'
    }
}));

const images = [
    {
        "name": "Balcones",
        "img": balcones,
        "address": "12017 Amherst Dr, Austin, TX 78759",
    },
    {
        'name': 'Mule',
        "img": mule,
        "address": "5201 Berkman Dr, Austin, TX 78723",
    },
    {
        'name': 'NorthWest',
        "img": northwest,
        "address": "7000 Ardath St, Austin, TX 78757",
    }
];

const Courts = () => {
    const classes = useStyles();

    return (
        <div className={classes.courtContainer}>
            <div className={classes.titles}>
                    <h2>Name</h2>
                    <h2>Address</h2>
                    <h2>Preview</h2>
            </div>
            <div className={classes.courtInfoContainer}>
                {
                    images.map((image, i) => {
                        return (
                            <div key={i} className={classes.courts}>
                                <p className="legend"><b>{image.name}</b></p>
                                <p>{image.address}</p>
                                <SelectedCourt
                                image={image}
                                >
                                </SelectedCourt>

                            </div>
                        )
                    })
                }
            </div>    
        </div>
    )
}

export default Courts;