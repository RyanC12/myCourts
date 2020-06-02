import React, { useState } from 'react';
import Geocode from "react-geocode";


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
        width: 500,
        height: 250,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    thumbnail: {
        width: '50px',
        height: '50px'
    },
    courtPreview: {
        width: '100%',
        height: '100%'
    }
}));

const SelectedBusiness = ({ image }) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    
    const [isOpen, setIsOpen] = useState(false)
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();


    const handleOpen = () => {
        setIsOpen(true);
        geocode()
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const geocode = () => {
        axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: image.address,
                key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
            }
        })
            .then(response => {
                console.log({response})
                setLat(response.data.results[0].geometry.location.lat || null)
                setLng(response.data.results[0].geometry.location.lng || null)
                console.log('hit the mapping')

            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <a href="#">
                <img onClick={handleOpen} className={classes.thumbnail} src={image.img} alt={image.name} />
            </a>
            <Modal
                open={isOpen}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <img onClick={handleOpen} className={classes.courtPreview} src={image.img} alt={image.name} />
                    { lat && lng ? 
                                    <Map 
                                    lat={lat}
                                    lng={lng} 
                                    />
                                    :
                                    null
                }
                </div>
            </Modal>
        </div>
    );
}

export default SelectedBusiness;
