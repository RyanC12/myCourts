import React, { useState } from 'react';

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Map from './Map';


function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const SelectedBusiness = ({ image }) => {
    console.log({image})
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const [isOpen, setIsOpen] = useState(false)
    // const [lat, setLat] = useState();
    // const [lng, setLng] = useState();


    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // const geocode = () => {
    //     axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
    //         params: {
    //             address: image.address,
    //             key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    //         }
    //     })
    //         .then(response => {
    //             setLat(response.data.results[0].geometry.location.lat || null)
    //             setLng(response.data.results[0].geometry.location.lng || null)

    //         })
    //         .catch(error => console.log(error))
    // }
    // geocode()
    return (
        <div>
            <a href="#">
                <p onClick={handleOpen}>{image.name}</p>
            </a>
            <Modal
                open={isOpen}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h1>{image.name}</h1>
                    <h2>{image.address}</h2>
                    {/* <Map lat={lat} lng={lng} /> */}
                </div>
            </Modal>
        </div>
    );
}

export default SelectedBusiness;
