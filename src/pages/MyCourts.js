import React from 'react'

import Nav from '../components/Nav';
import Courts from '../components/Courts';
import Header from '../components/Header';

import Box from '@material-ui/core/Box';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCourts = () => {
    return (
        <Box>
            <Nav />
            <Header />
            <Courts />
        </Box>
    )
}

export default MyCourts;
