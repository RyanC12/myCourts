import React from 'react'

import Nav from '../components/Nav';
import HomePage from '../components/HomePage';
import Box from '@material-ui/core/Box';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCourts = () => {
    return (
        <Box>
            <Nav />
            <HomePage />
        </Box>
    )
}

export default MyCourts;
