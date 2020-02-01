import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import balcones from '/Users/rxc1bc4/Documents/personal-project/my-courts/src/images/Balcones.jpg';
import mule from '../images/mule.png';
import northwest from '../images/northwest.png';
import SelectedCourt from '../components/SelectedCourt';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    courtContainer: {
        width: '500px',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
    },
    section: {
        width: '60%',
    },
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
        <Container className={classes.courtContainer}>
            <Carousel>
                {
                    images.map((image, i) => {
                        console.log({images})
                        return (
                            <div key={i}>
                                <img src={image.img} alt={image.name} />
                                <SelectedCourt
                                image={image}
                                >
                                <p className="legend">{image.name}</p>
                                </SelectedCourt>

                            </div>
                        )
                    })
                }
            </Carousel>
        </Container>
    )
}

export default Courts;